from django.db import models
from Contrat.models import Contrat
# Create your models here.
class Caution(models.Model):
    contrat = models.OneToOneField(Contrat, on_delete=models.CASCADE)
    montant = models.DecimalField(max_digits=10, decimal_places=2)
    date_paiement = models.DateField()

    def __str__(self):
        return f"Caution pour {self.contrat}"