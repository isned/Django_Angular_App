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


from django.db import models

# Create your models here.
class Conducteur(models.Model):
    permis_numero = models.CharField(max_length=20, unique=True)  # Driver's license number
    nom = models.CharField(max_length=255)  # Last name
    prenom = models.CharField(max_length=255)  # First name
    date_de_naissance = models.DateField(null=True, blank=True)  # Date of birth
    lieu_de_naissance = models.CharField(max_length=255, null=True, blank=True)  # Place of birth
    nationalite = models.CharField(max_length=255)  # Nationality
    adresse = models.CharField(max_length=255)  # Address
    ville = models.CharField(max_length=255)  # City  # This attribute is not in the image but might be useful
    pays = models.CharField(max_length=255)  # Country  # This attribute is not in the image but might be useful
    email = models.EmailField(unique=True)  # Email
    telephone = models.CharField(max_length=20)  # Phone number
    telephone2 = models.CharField(max_length=20, null=True, blank=True)  # Phone number 2  # This attribute is in the image but not specified as required
    cin = models.CharField(max_length=8, null=True, blank=True)  # CIN (National identity card number)
    passeport_numero = models.CharField(max_length=20, null=True, blank=True)  # Passport number
    passeport_date_emission = models.DateField(null=True, blank=True)  # Passport issued date
    passeport_date_expiration = models.DateField(null=True, blank=True)  # Passport expiration date
    permis_de_conduire_date_emission = models.DateField()  # Driver's license issued date
    permis_de_conduire_date_expiration = models.DateField()  # Driver's license expiration date
    # permis_de_conduire_categorie = models.CharField(max_length=255, null=True, blank=True)  # Driver's license category  # This attribute might be useful but not in the image
    copie_permis = models.FileField(upload_to='permis/', null=True, blank=True)  # Driver's license copy  # This attribute might be useful but not based on the image text
    copie_passeport = models.FileField(upload_to='passeport/', null=True, blank=True)  # Passport copy  # This attribute might be useful but not based on the image text
    est_chauffeur_interne = models.BooleanField(default=False)  # Internal driver
    note = models.TextField(null=True, blank=True)  # Notes

    def __str__(self):
        return self.nom
