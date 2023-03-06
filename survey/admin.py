from django.contrib import admin
from .models import Survey, Evaluation, ParticipantEvaluation
class SurveyAdmin(admin.ModelAdmin):
    list_display = (
        'role',
        'client_id',
        'consent_form',
        'age', 
        'gender', 
        'preferred_writing_language', 
        'preferred_reading_language', 
        'country',
        'nationality',
        'ethnicity',
        'text_directionality',
        'internet_stability',
        'broadband_contract',
        'age_first_used_technology',
        'competency_level',
        'age_when_first_owned_device',
        'device_ownership_status',
        'device_sharing_status',
        'device_type_owned',
        'device_access',
        'design_principles',
        'time_personal_home_life',
        'good_performance',
        'employment',
        'pleasant_people',
        'work_interesting',
        'consulted_by_superiors',
        'desirable_area',
        'respected_by_family',
        'chances_for_promotion',
        'keeping_time_for_fun',
        'moderation',
        'service_to_friend',
        'thrift',
        'nervous_tense',
        'happiness',    
        'prevention_due_to_circumstances',
        'state_of_health',
        'proud_citizen',
        'contradicting_superior',
        'good_manager',
        'persistent_efforts',
        'organization_structure',
        'organization_rules',
        'education',
        'job',
        'nationality_from_birth',
        'created_on'
        )

class EvaluationAdmin(admin.ModelAdmin):
    list_display = (
        'role',
        'client_id',
        'consent_form', 
        'usefulness_for_profession', 
        'usefulness_for_profession_reason',
        'usefulness_for_researcher', 
        'usefulness_for_researcher_reason',
        'design_for_non_western', 
        'design_for_non_western_reason',
        'design_for_western',
        'design_for_western_reason',
        'feedback',
        'created_on'
    )

class ParticipantEvaluationAdmin(admin.ModelAdmin):
    list_display = (
        'correlation',
        'no_correlation_reason',
        'correlation_culture',
        'no_correlation_culture_reason',
        'correlation_ethnicity',
        'no_correlation_ethnicity_reason',
        'correlation_age',
        'no_correlation_age_reason',
        'correlation_nationality',
        'no_correlation_nationality_reason',
        'representation_of_user',
        'no_representation_reason',
        'generalisability',
        'no_generalisability_reason',
        'created_on'
    )
    
admin.site.register(Survey, SurveyAdmin)
admin.site.register(Evaluation, EvaluationAdmin)
admin.site.register(ParticipantEvaluation, ParticipantEvaluationAdmin)