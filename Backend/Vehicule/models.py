from django.db import models

# Create your models here.

class Vehicule(models.Model):
    immatriculation = models.CharField(max_length=20,unique=True)
    marque = models.CharField(max_length=100)
    modele = models.CharField(max_length=100)
    couleur = models.CharField(max_length=20)
    annee = models.IntegerField()  
    actif = models.BooleanField(default=True)
    photo = models.ImageField(upload_to='photos', blank=True, null=True)

    def __str__(self):
        return f"{self.marque} {self.modele} ({self.annee}) - {self.immatriculation}"
