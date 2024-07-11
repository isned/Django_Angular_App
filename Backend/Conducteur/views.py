from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Conducteur
from .serializers import ConducteurSerializer

class ConducteurListCreate(generics.ListCreateAPIView):
    queryset = Conducteur.objects.all()
    serializer_class = ConducteurSerializer

class ConducteurRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Conducteur.objects.all()
    serializer_class = ConducteurSerializer
