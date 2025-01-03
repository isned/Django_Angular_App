from django.contrib import admin


# Register your models here.
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ['email', 'created_at']
    search_fields = ('email'),


admin.site.register(User, UserAdmin)