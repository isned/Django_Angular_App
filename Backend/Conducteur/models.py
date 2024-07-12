from django.db import models

# Create your models here.
class Conducteur(models.Model):
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)
    telephone = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    date_naissance = models.DateField(null=True, blank=True)
    lieu_naissance = models.CharField(max_length=255, null=True, blank=True)
    nationality = models.CharField(max_length=255, null=True, blank=True)
    cin = models.CharField(max_length=8, null=True, blank=True)
    permis_conduire_numero = models.CharField(max_length=20, unique=True)
    permis_conduire_date_emission = models.DateField()
    permis_conduire_date_expiration = models.DateField()
    carte_sejour_numero = models.CharField(max_length=20, null=True, blank=True)
    carte_sejour_date_emission = models.DateField(null=True, blank=True)
   
    niveau_risque = models.IntegerField(null=True, blank=True)  # Score de risque basé sur des critères définis

    def __str__(self):
        return self.nom
