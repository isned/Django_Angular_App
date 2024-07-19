from django.db import models
from Client.models import Client  
from Conducteur.models import Conducteur 
from Vehicule.models import Vehicule 

class Contrat(models.Model):
  
    ETAT_CHOICES = [
        ('brouillon', 'Brouillon'),
        ('actif', 'Actif'),
        ('termine', 'Terminé'),
        ('annule', 'Annulé'),
       
    ]
    
    numero = models.TextField(blank=True)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    conducteur = models.ForeignKey(Conducteur, on_delete=models.SET_NULL, null=True, blank=True)
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE)
       
    date_prise = models.DateField()  
    date_retour = models.DateField(null=True, blank=True) 
   
    restitution = models.CharField(max_length=255, null=True, blank=True)  
    total_ttc = models.DecimalField(max_digits=10, decimal_places=2)  
    reste = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  
    
    etat = models.CharField(max_length=20, choices=ETAT_CHOICES, default='brouillon')  

    def __str__(self):
        return f"Contrat de {self.client.nom_complet} pour {self.vehicule.marque} {self.vehicule.modele}"
