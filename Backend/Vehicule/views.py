from django.shortcuts import render

# Create your views here.
# vehicules/views.py

from rest_framework import generics
from .models import Vehicule
from .serializers import VehiculeSerializer

class VehiculeListCreate(generics.ListCreateAPIView):
    queryset = Vehicule.objects.all()
    serializer_class = VehiculeSerializer

class VehiculeRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vehicule.objects.all()
    serializer_class = VehiculeSerializer
