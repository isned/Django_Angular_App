from django.db import models

# Create your models here.


from django.db import models

class CategorieVehicule(models.Model):
    NOM_CHOICES = [
        ('berline', 'Berline'),
        ('hatchback', 'Hatchback'),
        ('suv', 'SUV'),
        ('crossover', 'Crossover'),
        ('coupe', 'Coupé'),
        ('cabriolet', 'Cabriolet'),
        ('break', 'Break'),
        ('monospace', 'Monospace'),
        ('pickup', 'Pick-up'),
        ('fourgon', 'Fourgon'),
    ]

    nom = models.CharField(max_length=20, choices=NOM_CHOICES, unique=True)

    def __str__(self):
        return self.get_nom_display()
