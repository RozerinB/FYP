from django.contrib import admin
from .models import Survey

class SurveyAdmin(admin.ModelAdmin):
    list_display = (
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
        "client_id"
        )

admin.site.register(Survey, SurveyAdmin)