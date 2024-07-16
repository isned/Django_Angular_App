from django.shortcuts import render

# Create your views here.
from django.shortcuts import get_object_or_404
from rest_framework import generics
from .models import Paiement  # Assurez-vous que Paiement est correctement importé
from .serializers import PaiementSerializer  # Assurez-vous que PaiementSerializer est correctement importé

class PaiementListCreateAPIView(generics.ListCreateAPIView):
    queryset = Paiement.objects.all()
    serializer_class = PaiementSerializer

class PaiementDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Paiement.objects.all()
    serializer_class = PaiementSerializer
