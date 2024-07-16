
from django.urls import path
from .views import PaiementListCreateAPIView, PaiementDetailAPIView  # Assurez-vous d'importer correctement vos vues

urlpatterns = [
    path('paiement/', PaiementListCreateAPIView.as_view(), name='paiement-list-create'),
    path('paiement/<int:pk>/', PaiementDetailAPIView.as_view(), name='paiement-detail'),
   
]
