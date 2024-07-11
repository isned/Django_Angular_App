from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.urls import reverse
from Client.models import Client  
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail

# Définition des choix pour le genre et le rôle
GENDER_CHOICES = (
    ("Mademoiselle", 'Mademoiselle'),
    ("Madame", 'Madame'),
    ("Monsieur", 'Monsieur'),
)

ROLE_CHOICES = (
    ("admin", 'Admin'),
    ("client", 'Client'),
)

# Gestionnaire d'utilisateur personnalisé
class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        user = self.create_user(
            email=email,
            username=username,
            password=password,
            **extra_fields
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

# Modèle utilisateur personnalisé
class User(AbstractBaseUser, PermissionsMixin):
    gender = models.CharField(
        max_length=200, choices=GENDER_CHOICES, default="Monsieur", blank=True, null=True)
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    cin = models.CharField(max_length=8, null=True, blank=True)
    date_of_birth = models.DateField(blank=True, null=True)
    place_of_birth = models.CharField(max_length=255, null=True, blank=True)
    nationality = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=8, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    img = models.ImageField(upload_to='user/media', null=True, blank=True)
    role = models.CharField(
        max_length=200, choices=ROLE_CHOICES, default="client", blank=True, null=True)
    function = models.CharField(max_length=255, null=True, blank=True)
    is_verified = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    auth_provider = models.CharField(
        max_length=255, blank=False, null=False, default='email')

    groups = models.ManyToManyField(
        Group,
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='auth_user_groups',  # Spécifiez un related_name distinct pour les groupes
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='auth_user_permissions',  # Spécifiez un related_name distinct pour les permissions
        related_query_name='user',
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username

    class Meta:
        ordering = ['-created_at']

# Récepteur pour la création de jetons de réinitialisation de mot de passe
@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    reset_password_link = reverse('password_reset:reset-password-request') + '?token=' + reset_password_token.key
    send_mail(
        "Password Reset Request",
        f"Use the link to reset your password: {reset_password_link}",
        "noreply@example.com",
        [reset_password_token.user.email],
        fail_silently=False,
    )

# Exemple de post-save signal pour créer un profil client après la création d'un utilisateur
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created and instance.role == 'client':
        Client.objects.create(user=instance)