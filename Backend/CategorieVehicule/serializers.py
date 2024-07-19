# serializers.py dans l'application Vehicule

from rest_framework import serializers
from .models import CategorieVehicule

class CategorieVehiculeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategorieVehicule
        fields = '__all__'  
