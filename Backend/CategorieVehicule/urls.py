# urls.py dans l'application Vehicule

from django.urls import path
from .views import CategorieVehiculeListCreateView, CategorieVehiculeRetrieveUpdateDestroyView

urlpatterns = [
    path('categorie/', CategorieVehiculeListCreateView.as_view(), name='categorie-list-create'),
    path('categorie/<int:pk>/', CategorieVehiculeRetrieveUpdateDestroyView.as_view(), name='categorie-detail'),
]
