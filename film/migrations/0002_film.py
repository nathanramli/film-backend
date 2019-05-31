# Generated by Django 2.2.1 on 2019-05-29 10:03

from django.db import migrations

def create_data(apps, schema_editor):
	Film = apps.get_model('film', 'Film')
	Film(judul_film="Avengers", deskripsi="Avengers deskripsi").save()

class Migration(migrations.Migration):

    dependencies = [
        ('film', '0001_initial'),
    ]

    operations = [
    	migrations.RunPython(create_data),
    ]