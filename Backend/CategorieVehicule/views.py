from django.shortcuts import render

# Create your views here.
# views.py dans l'application Vehicule

from rest_framework import generics
from .models import CategorieVehicule
from .serializers import CategorieVehiculeSerializer

class CategorieVehiculeListCreateView(generics.ListCreateAPIView):
    queryset = CategorieVehicule.objects.all()
    serializer_class = CategorieVehiculeSerializer

class CategorieVehiculeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CategorieVehicule.objects.all()
    serializer_class = CategorieVehiculeSerializer
