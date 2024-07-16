from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Marque
from .serializers import MarqueSerializer

class MarqueListCreateAPIView(generics.ListCreateAPIView):
    queryset = Marque.objects.all()
    serializer_class = MarqueSerializer

class MarqueRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Marque.objects.all()
    serializer_class = MarqueSerializer