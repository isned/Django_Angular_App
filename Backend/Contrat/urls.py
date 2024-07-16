from django.urls import path
from .views import ContratListCreate, ContratRetrieveUpdateDestroy

urlpatterns = [
    path('contrat/', ContratListCreate.as_view(), name='contrat-list-create'),
    path('contrat/<int:pk>/', ContratRetrieveUpdateDestroy.as_view(), name='contrat-retrieve-update-destroy'),
]
