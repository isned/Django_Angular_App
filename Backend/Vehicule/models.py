from django.db import models

# Create your models here.

class Vehicule(models.Model):
    marque = models.CharField(max_length=100)
    modele = models.CharField(max_length=100)
    annee = models.IntegerField()  
    actif = models.BooleanField(default=True)
    immatriculation = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='media/photos', blank=True, null=True)

    def __str__(self):
        return f"{self.marque} {self.modele} ({self.annee}) - {self.immatriculation}"
