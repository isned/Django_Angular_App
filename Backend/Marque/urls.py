from django.urls import path
from .views import (
    MarqueListCreateAPIView,
    MarqueRetrieveUpdateDestroyAPIView,
)

urlpatterns = [
    path('marque/', MarqueListCreateAPIView.as_view(), name='marque_list_create_api'),
    path('marque/<int:pk>/', MarqueRetrieveUpdateDestroyAPIView.as_view(), name='marque_detail_api'),
]