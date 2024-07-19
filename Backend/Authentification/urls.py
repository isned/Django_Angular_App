
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from django_rest_passwordreset.views import reset_password_request_token, reset_password_confirm
from .views import (
    RegisterView, LoginView, ListUsers, UpdateUserAPIView, DeleteUserAPIView,
    DetailUser, ChangePasswordView
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginView.as_view(), name="login"),
    path('user/', ListUsers.as_view(), name='auth_list_users'),
    path('user/update/<int:pk>/', UpdateUserAPIView.as_view(), name="department_update"),
    path('user/detail/<int:pk>/', DetailUser.as_view(), name='detail_users'),
    path('delete/<int:pk>/', DeleteUserAPIView.as_view(), name="user_delete"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('api/change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('auth/', include('djoser.urls')),
]
