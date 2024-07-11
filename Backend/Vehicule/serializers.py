# vehicules/serializers.py

from rest_framework import serializers
from .models import Vehicule

class VehiculeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicule
        fields = ['id', 'immatriculation','marque', 'modele', 'couleur','annee', 'actif', 'photo']
