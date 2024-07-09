# vehicules/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('vehicules/', views.VehiculeListCreate.as_view(), name='vehicule-list-create'),
    path('vehicules/<int:pk>/', views.VehiculeRetrieveUpdateDestroy.as_view(), name='vehicule-retrieve-update-destroy'),
]
