# Generated by Django 4.2 on 2024-07-12 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Conducteur', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='conducteur',
            name='cin',
            field=models.CharField(blank=True, max_length=8, null=True),
        ),
        migrations.AddField(
            model_name='conducteur',
            name='date_naissance',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='conducteur',
            name='lieu_naissance',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='conducteur',
            name='nationality',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
