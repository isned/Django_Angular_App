from django.db import models

# Create your models here.
class Client(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    telephone = models.CharField(max_length=15)
    adresse = models.TextField()
    ville = models.CharField(max_length=100)
    code_postal = models.CharField(max_length=10)
    date_naissance = models.DateField()
    num_permis = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f"{self.nom} {self.prenom} - {self.email}"