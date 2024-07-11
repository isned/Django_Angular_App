from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Caution
from .serializers import CautionSerializer

class CautionDetail(generics.RetrieveAPIView):
    queryset = Caution.objects.all()
    serializer_class = CautionSerializer

class CautionCreate(generics.CreateAPIView):
    queryset = Caution.objects.all()
    serializer_class = CautionSerializer

class CautionUpdate(generics.UpdateAPIView):
    queryset = Caution.objects.all()
    serializer_class = CautionSerializer

class CautionDelete(generics.DestroyAPIView):
    queryset = Caution.objects.all()
    serializer_class = CautionSerializer
