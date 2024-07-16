from django.db import models

# Create your models here.
from django.db import models
from Contrat.models import Contrat

class Paiement(models.Model):
    CONTRAT_TYPE_CHOICES = [
        ('CAUTION', 'Caution'),
        ('PAIEMENT', 'Paiement'),
    ]

    contrat = models.ForeignKey(Contrat, on_delete=models.CASCADE, related_name='paiements')
    montant = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField() 
    type = models.CharField(max_length=10, choices=CONTRAT_TYPE_CHOICES)

    class Meta:
        verbose_name = "Paiement"
        verbose_name_plural = "Paiements"