# vehicules/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('vehicule/', views.VehiculeListCreate.as_view(), name='vehicule-list-create'),
    path('vehicule/<int:pk>/', views.VehiculeRetrieveUpdateDestroy.as_view(), name='vehicule-retrieve-update-destroy'),
]
