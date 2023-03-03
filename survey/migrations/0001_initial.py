# Generated by Django 4.1.7 on 2023-03-03 13:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DesignPrinciple',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('principle1', models.IntegerField(blank=True, default=None)),
                ('principle2', models.IntegerField(blank=True, default=None)),
                ('principle3', models.IntegerField(blank=True, default=None)),
                ('principle4', models.IntegerField(blank=True, default=None)),
                ('principle5', models.IntegerField(blank=True, default=None)),
                ('principle6', models.IntegerField(blank=True, default=None)),
                ('principle7', models.IntegerField(blank=True, default=None)),
            ],
        ),
        migrations.CreateModel(
            name='Evaluation',
            fields=[
                ('role', models.TextField(default='')),
                ('client_id', models.CharField(default=None, max_length=100, primary_key=True, serialize=False)),
                ('consent_form', models.BooleanField(default=False)),
                ('usefulness_for_profession', models.TextField(default='')),
                ('usefulness_for_researcher', models.TextField(default='')),
                ('design_for_non_western', models.TextField(default='')),
                ('design_for_western', models.TextField(default='')),
                ('feedback', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='ParticipantEvaluation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('correlation', models.BooleanField(default=False)),
                ('no_correlation_reason', models.TextField(blank=True, default='')),
                ('correlation_culture', models.BooleanField(default=False)),
                ('no_correlation_culture_reason', models.TextField(blank=True, default='')),
                ('representation_of_user', models.BooleanField(default=False)),
                ('no_representation_reason', models.TextField(blank=True, default='')),
                ('generalisability', models.BooleanField(default=False)),
                ('no_generalisability_reason', models.TextField(blank=True, default='')),
            ],
        ),
        migrations.CreateModel(
            name='Survey',
            fields=[
                ('role', models.TextField(default='')),
                ('client_id', models.CharField(default=None, max_length=100, primary_key=True, serialize=False)),
                ('age', models.TextField(default='18-19')),
                ('gender', models.TextField(default='')),
                ('preferred_writing_language', models.TextField(default='')),
                ('preferred_reading_language', models.TextField(default='')),
                ('country', models.TextField(default='')),
                ('nationality', models.TextField(default='')),
                ('ethnicity', models.TextField(default='')),
                ('text_directionality', models.TextField(default='')),
                ('internet_stability', models.TextField(default='')),
                ('broadband_contract', models.TextField(default='')),
                ('age_first_used_technology', models.IntegerField(blank=True, default=None)),
                ('competency_level', models.TextField(default='')),
                ('age_when_first_owned_device', models.IntegerField(blank=True, default=None)),
                ('device_ownership_status', models.TextField(default='')),
                ('device_sharing_status', models.TextField(default='')),
                ('device_type_owned', models.JSONField(default=list)),
                ('device_access', models.JSONField(default=list)),
                ('time_personal_home_life', models.TextField(blank=True)),
                ('good_performance', models.TextField(blank=True)),
                ('employment', models.TextField(blank=True)),
                ('pleasant_people', models.TextField(blank=True)),
                ('work_interesting', models.TextField(blank=True)),
                ('consulted_by_superiors', models.TextField(blank=True)),
                ('desirable_area', models.TextField(blank=True)),
                ('respected_by_family', models.TextField(blank=True)),
                ('chances_for_promotion', models.TextField(blank=True)),
                ('keeping_time_for_fun', models.TextField(blank=True)),
                ('moderation', models.TextField(blank=True)),
                ('service_to_friend', models.TextField(blank=True)),
                ('thrift', models.TextField(blank=True)),
                ('nervous_tense', models.TextField(blank=True)),
                ('happiness', models.TextField(blank=True)),
                ('prevention_due_to_circumstances', models.TextField(blank=True)),
                ('state_of_health', models.TextField(blank=True)),
                ('proud_citizen', models.TextField(blank=True)),
                ('contradicting_superior', models.TextField(blank=True)),
                ('good_manager', models.TextField(blank=True)),
                ('persistent_efforts', models.TextField(blank=True)),
                ('organization_structure', models.TextField(blank=True)),
                ('organization_rules', models.TextField(blank=True)),
                ('education', models.TextField(blank=True)),
                ('job', models.TextField(blank=True)),
                ('consent_form', models.BooleanField(default=False)),
                ('nationality_from_birth', models.TextField(blank=True)),
                ('design_principles', models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='survey.designprinciple')),
            ],
        ),
    ]