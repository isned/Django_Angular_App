from django.db import models
from Conducteur.models import Conducteur

GENDER_CHOICES = (
    ("Mademoiselle", 'Mademoiselle'),
    ("Madame", 'Madame'),
    ("Monsieur", 'Monsieur'),
)

class Client(models.Model):
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    nom_complet = models.CharField(max_length=200)  # Make sure this field exists
    gender = models.CharField(
    max_length=200, choices=GENDER_CHOICES, default="Monsieur", blank=True, null=True)
    adresse = models.CharField(max_length=255)
    telephone = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    date_naissance = models.DateField(null=True, blank=True)
    lieu_naissance = models.CharField(max_length=255, null=True, blank=True)
    nationality = models.CharField(max_length=255, null=True, blank=True)
    cin = models.CharField(max_length=8, null=True, blank=True)
    est_conducteur = models.BooleanField(default=False)  # Indique si le client est également un conducteur
    conducteur = models.OneToOneField(Conducteur, null=True, blank=True, on_delete=models.SET_NULL)

 

    def __str__(self):
        return self.nom_complet