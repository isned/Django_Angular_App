from django.urls import path
from .views import ConducteurListCreate, ConducteurRetrieveUpdateDestroy

urlpatterns = [
    path('conducteur/', ConducteurListCreate.as_view(), name='conducteur-list-create'),
    path('conducteur/<int:pk>/', ConducteurRetrieveUpdateDestroy.as_view(), name='conducteur-retrieve-update-destroy'),
]
