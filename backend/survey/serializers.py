from rest_framework import serializers
from .models import Survey

class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = (
        'age', 
        'gender', 
        'languageToWrite', 
        'languageToRead', 
        'country',
        'nationality',
        'ethnicity',
        'textDirectionality',
        'internetStability',
        'broadbandContract',
        'ageForTech',
        'competency',
        'ageForDevice',
        'deviceOwnership',
        'deviceShare',
        'deviceTypeOwnership',
        'deviceAccess',
        'designPrinciples'
        )
