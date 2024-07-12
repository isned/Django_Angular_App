from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import send_mail
from django.urls import reverse


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'gender', 'username', 'email', 'first_name', 'last_name', 'cin', 'date_of_birth',
            'place_of_birth', 'nationality', 'phone', 'address', 'img', 'role', 'function', 'is_verified', 
            'created_at', 'updated_at'
        )
        read_only_fields = ('id', 'is_verified', 'created_at', 'updated_at')
        ref_name = "CustomUserSerializer"  # Ajout du nom de référence unique


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'role')
        extra_kwargs = {'password': {'write_only': True}}
        ref_name = "CustomRegisterSerializer"  # Ajout du nom de référence unique

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            role=validated_data.get('role', User.ROLE_CHOICES[1][0])  # Default to 'client' role
        )
        return user


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    class Meta:
        ref_name = "CustomChangePasswordSerializer"  # Ajout du nom de référence unique


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    class Meta:
        ref_name = "CustomPasswordResetSerializer"  # Ajout du nom de référence unique

    def validate_email(self, value):
        user = User.objects.filter(email=value).first()
        if not user:
            raise serializers.ValidationError('No user found with this email')
        return value

    def save(self):
        email = self.validated_data['email']
        user = User.objects.get(email=email)
        token = PasswordResetTokenGenerator().make_token(user)
        reset_password_link = reverse('password_reset:reset-password-request') + '?token=' + token
        send_mail(
            "Password Reset Request",
            f"Use the link to reset your password: {reset_password_link}",
            "noreply@example.com",
            [email],
            fail_silently=False,
        )
        return token


class SetNewPasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(required=True)

    class Meta:
        ref_name = "CustomSetNewPasswordSerializer"  # Ajout du nom de référence unique
