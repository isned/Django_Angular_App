# models.py dans l'application Vehicule

from django.db import models
from django.utils import timezone
from CategorieVehicule.models import CategorieVehicule
from Marque.models import Marque

def default_date_immatriculation():
    return timezone.now().date()

class Vehicule(models.Model):
    CARBURANT_CHOICES = [
        ('essence', 'Essence'),
        ('diesel', 'Diesel'),
        ('hybride', 'Hybride'),
        ('electrique', 'Électrique'),
        ('gaz', 'Gaz'),
        ('autre', 'Autre'),
    ]
    
    ETAT_CHOICES = [
        ('disponible', 'Disponible'),
        ('en_reparation', 'En réparation'),
        ('loue', 'Loué'),
    ]

    immatriculation = models.CharField(max_length=20, unique=True)
    marque = models.ForeignKey(Marque, on_delete=models.CASCADE)
    modele = models.CharField(max_length=100)
    couleur = models.CharField(max_length=20)
    annee = models.IntegerField()
    etat = models.CharField(max_length=15, choices=ETAT_CHOICES, default='disponible')
    photo = models.ImageField(upload_to='photos/', blank=True, null=True)
    date_immatriculation = models.DateField(default=default_date_immatriculation)
    carburant = models.CharField(max_length=20, choices=CARBURANT_CHOICES, default='essence')
    categorie = models.ForeignKey(CategorieVehicule, on_delete=models.SET_NULL, null=True, blank=True)
    date_visite_service = models.DateField(null=True, blank=True)
    date_assurance = models.DateField(null=True, blank=True)
    date_vignette = models.DateField(null=True, blank=True)
    kilometrage = models.PositiveIntegerField(null=True, blank=True)
    carte_grise = models.ImageField(upload_to='cartes_grises/', blank=True, null=True)
    carte_exploitation = models.ImageField(upload_to='cartes_exploitation/', blank=True, null=True)

    def __str__(self):
        return f"{self.marque} {self.modele} ({self.annee}) - {self.immatriculation}"
