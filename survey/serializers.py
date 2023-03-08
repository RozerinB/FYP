from rest_framework import serializers
from .models import Survey, DesignPrinciple, Evaluation, ParticipantEvaluation
import json
class DesignPrincipleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesignPrinciple
        fields = ('principle1', 'principle2', 'principle3', 'principle4', 'principle5', 'principle6', 'principle7')

class SurveySerializer(serializers.ModelSerializer):
    design_principles = DesignPrincipleSerializer()
    class Meta:
        model = Survey
        fields = (
            'role',
            'client_id',
            'consent_form',
            'nationality_from_birth',
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
            # cultural dimensions
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
        )
    def to_representation(self, data):
        data = super(SurveySerializer, self).to_representation(data)
        if type(data.get('device_access')) == str and type(data.get('device_type_owned')) == str :
            data['device_access'] = json.loads(data.get('device_access'))
            data['device_type_owned'] = json.loads(data.get('device_type_owned'))
        del data['client_id']
        del data['role']
        del data['consent_form']
        return data

    def create(self, validated_data):
        design_principles_data = validated_data.pop('design_principles')
        design_principle = DesignPrinciple.objects.create(**design_principles_data)
        survey = Survey.objects.create(design_principles=design_principle, **validated_data)
        return survey

class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = (
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
            'design_globally',
            'design_globally_reason',
            'feedback',
            'created_on',
            )
        
class ParticipantEvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParticipantEvaluation
        fields = (
             'client_id',
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
             'feedback',
             'created_on'
            )