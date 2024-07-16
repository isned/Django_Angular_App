from django.db import models
from Client.models import Client  
from Conducteur.models import Conducteur 
from Vehicule.models import Vehicule 

class Contrat(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    conducteur = models.ForeignKey(Conducteur, on_delete=models.SET_NULL, null=True, blank=True)
    vehicule = models.ForeignKey(Vehicule, on_delete=models.CASCADE)
    date_signature = models.DateField()
    date_debut_contrat = models.DateField() 
    date_fin_contrat = models.DateField()   
    duree_contrat = models.IntegerField()
    montant_total = models.DecimalField(max_digits=10, decimal_places=2)
    conditions = models.TextField(blank=True)

    def __str__(self):
        return f"Contrat de {self.client.nom_complet} pour {self.vehicule.marque} {self.vehicule.modele}"