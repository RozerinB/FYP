# Generated by Django 3.2.4 on 2023-02-22 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='survey',
            name='nationality_from_birth',
            field=models.TextField(blank=True),
        ),
    ]