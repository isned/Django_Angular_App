# vehicules/urls.py

from django.urls import path
from .views import  ClientListCreate, ClientRetrieveUpdateDestroy

urlpatterns = [
    
    path('client/', ClientListCreate.as_view(), name='client-list-create'),
    path('client/<int:pk>/', ClientRetrieveUpdateDestroy.as_view(), name='client-retrieve-update-destroy'),
]
