from django.contrib import admin
from django.urls import include, path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="API Documentation",
        default_version='v1',
        description="Description of your API",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@yourapi.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/', include('Vehicule.urls')),
    path('api/', include('Client.urls')),
    path('api/', include('Conducteur.urls')),
     path('api/', include('Marque.urls')),
    path('api/', include('Contrat.urls')),
    path('api/', include('Paiement.urls')),
   
    
    path('api/', include('CategorieVehicule.urls')),
    path('api/auth/', include('Auth.urls')),
   
]
