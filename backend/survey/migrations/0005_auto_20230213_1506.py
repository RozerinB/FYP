# Generated by Django 3.2.4 on 2023-02-13 15:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0004_auto_20230213_0009'),
    ]

    operations = [
        migrations.AlterField(
            model_name='designprinciple',
            name='principle1',
            field=models.IntegerField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='designprinciple',
            name='principle2',
            field=models.IntegerField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='designprinciple',
            name='principle3',
            field=models.IntegerField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='designprinciple',
            name='principle4',
            field=models.IntegerField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='designprinciple',
            name='principle5',
            field=models.IntegerField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='designprinciple',
            name='principle6',
            field=models.IntegerField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='designprinciple',
            name='principle7',
            field=models.IntegerField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='survey',
            name='design_principles',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='survey.designprinciple'),
        ),
    ]
