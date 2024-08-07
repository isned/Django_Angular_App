# vehicules/serializers.py

from rest_framework import serializers
from .models import Vehicule
from Marque.serializers import MarqueSerializer
from CategorieVehicule.serializers import CategorieVehiculeSerializer

class VehiculeSerializer(serializers.ModelSerializer):
    marque_nom = serializers.CharField(source='marque.nom', read_only=True)
    categorie_nom = serializers.CharField(source='categorie.nom', read_only=True)

    class Meta:
        model = Vehicule
        fields = '__all__'
