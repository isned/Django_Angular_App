# Supprimez la migration Contrat.0002_contrat_date_debut_contrat_contrat_date_fin_contrat si elle existe déjà
# Modifiez la migration pour Contrat
from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('Contrat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contrat',
            name='date_debut_contrat',
            field=models.DateField(null=True, blank=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='contrat',
            name='date_fin_contrat',
            field=models.DateField(null=True, blank=True),
            preserve_default=False,
        ),
    ]
