# Generated by Django 2.2.1 on 2019-06-03 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('film', '0008_auto_20190601_2036'),
    ]

    operations = [
        migrations.AddField(
            model_name='film',
            name='tanggal_post',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
