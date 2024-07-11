# Dans votre fichier models.py

from django.db import models

from Conducteur.models import Conducteur

class Client(models.Model):
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)
    telephone = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    date_naissance = models.DateField(null=True, blank=True)
    informations_paiement = models.TextField(null=True, blank=True)  # Stocker les détails de paiement de manière sécurisée
    est_conducteur = models.BooleanField(default=False)  # Indique si le client est également un conducteur
    conducteur = models.OneToOneField(Conducteur, null=True, blank=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.nom_complet