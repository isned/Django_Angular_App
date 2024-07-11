from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Contrat
from .serializers import ContratSerializer

class ContratListCreate(generics.ListCreateAPIView):
    queryset = Contrat.objects.all()
    serializer_class = ContratSerializer

class ContratRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contrat.objects.all()
    serializer_class = ContratSerializer
