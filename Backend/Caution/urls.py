from django.urls import path
from .views import CautionDetail, CautionCreate, CautionUpdate, CautionDelete

urlpatterns = [
    path('caution/<int:pk>/', CautionDetail.as_view(), name='caution-detail'),
    path('caution/create/', CautionCreate.as_view(), name='caution-create'),
    path('caution/update/<int:pk>/', CautionUpdate.as_view(), name='caution-update'),
    path('caution/delete/<int:pk>/', CautionDelete.as_view(), name='caution-delete'),
]
