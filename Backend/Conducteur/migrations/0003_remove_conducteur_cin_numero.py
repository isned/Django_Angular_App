# Generated by Django 4.2 on 2024-07-12 10:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Conducteur', '0002_conducteur_cin_conducteur_date_naissance_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='conducteur',
            name='cin_numero',
        ),
    ]