from rest_framework import serializers
from .models import Survey, DesignPrinciple
class DesignPrincipleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesignPrinciple
        fields = ('principle1', 'principle2', 'principle3', 'principle4', 'principle5', 'principle6', 'principle7')

class SurveySerializer(serializers.ModelSerializer):
    design_principles = DesignPrincipleSerializer()
    class Meta:
        model = Survey
        fields = (
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
            'client_id'
        )
        
    def create(self, validated_data):
        design_principles_data = validated_data.pop('design_principles')
        design_principle = DesignPrinciple.objects.create(**design_principles_data)
        survey = Survey.objects.create(design_principles=design_principle, **validated_data)
        return survey
