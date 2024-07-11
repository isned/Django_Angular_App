from django.urls import path
from .views import ConducteurListCreate, ConducteurRetrieveUpdateDestroy

urlpatterns = [
    path('conducteurs/', ConducteurListCreate.as_view(), name='conducteur-list-create'),
    path('conducteurs/<int:pk>/', ConducteurRetrieveUpdateDestroy.as_view(), name='conducteur-retrieve-update-destroy'),
]
