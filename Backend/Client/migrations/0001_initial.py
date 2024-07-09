# Generated by Django 4.2 on 2024-07-09 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('prenom', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('telephone', models.CharField(max_length=15)),
                ('adresse', models.TextField()),
                ('ville', models.CharField(max_length=100)),
                ('code_postal', models.CharField(max_length=10)),
                ('date_naissance', models.DateField()),
                ('num_permis', models.CharField(max_length=20, unique=True)),
            ],
        ),
    ]
