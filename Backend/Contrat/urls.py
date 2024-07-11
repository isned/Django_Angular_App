from django.urls import path
from .views import ContratListCreate, ContratRetrieveUpdateDestroy

urlpatterns = [
    path('contrats/', ContratListCreate.as_view(), name='contrat-list-create'),
    path('contrats/<int:pk>/', ContratRetrieveUpdateDestroy.as_view(), name='contrat-retrieve-update-destroy'),
]
