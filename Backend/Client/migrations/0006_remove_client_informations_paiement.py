# Generated by Django 4.2 on 2024-07-12 10:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Client', '0005_client_cin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='informations_paiement',
        ),
    ]
