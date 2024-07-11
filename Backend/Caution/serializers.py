from rest_framework import serializers
from .models import Caution

class CautionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caution
        fields = '__all__'
