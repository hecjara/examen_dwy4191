# Generated by Django 2.1.2 on 2018-12-10 22:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20181208_2059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='notas_adicionales',
            field=models.CharField(max_length=200, verbose_name='Notas Adicionales'),
        ),
        migrations.AlterField(
            model_name='tienda',
            name='nombre_sucursal',
            field=models.CharField(max_length=50, verbose_name='Nombre Sucursal'),
        ),
    ]
