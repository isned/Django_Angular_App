# Generated by Django 4.2 on 2024-07-16 11:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Contrat', '0003_alter_contrat_date_debut_contrat_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Paiement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('montant', models.DecimalField(decimal_places=2, max_digits=10)),
                ('date', models.DateField()),
                ('type', models.CharField(choices=[('CAUTION', 'Caution'), ('PAIEMENT', 'Paiement')], max_length=10)),
                ('contrat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='paiements', to='Contrat.contrat')),
            ],
            options={
                'verbose_name': 'Paiement',
                'verbose_name_plural': 'Paiements',
            },
        ),
    ]
