# Generated by Django 4.2 on 2024-07-12 09:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Client', '0003_client_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='lieu_naissance',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='client',
            name='nationality',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
