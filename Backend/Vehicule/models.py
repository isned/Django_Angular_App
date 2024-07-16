from django.db import models
from django.utils import timezone
from Marque.models import Marque  # Import your Marque model here

def default_date_immatriculation():
    return timezone.now().date()

class Vehicule(models.Model):
    immatriculation = models.CharField(max_length=20, unique=True)
    marque = models.ForeignKey(Marque, on_delete=models.CASCADE)
    modele = models.CharField(max_length=100)
    couleur = models.CharField(max_length=20)  
    annee = models.IntegerField()
    actif = models.BooleanField(default=True)
    photo = models.ImageField(upload_to='photos/', blank=True, null=True)  
    date_immatriculation = models.DateField(default=default_date_immatriculation)

    def __str__(self):
        return f"{self.marque} {self.modele} ({self.annee}) - {self.immatriculation}"