# Generated by Django 4.2 on 2024-07-16 10:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Marque', '0001_initial'),
        ('Vehicule', '0006_vehicule_date_immatriculation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vehicule',
            name='marque',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Marque.marque'),
        ),
        migrations.AlterField(
            model_name='vehicule',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='photos/'),
        ),
    ]