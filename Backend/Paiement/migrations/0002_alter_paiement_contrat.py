# Generated by Django 4.2 on 2024-07-16 11:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Contrat', '0003_alter_contrat_date_debut_contrat_and_more'),
        ('Paiement', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paiement',
            name='contrat',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='paiement', to='Contrat.contrat'),
        ),
    ]
