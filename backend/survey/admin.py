from django.contrib import admin
from .models import Survey

class SurveyAdmin(admin.ModelAdmin):
    list_display = (
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
        # 'designPrinciples',
        )

# Register your models here.

admin.site.register(Survey, SurveyAdmin)
# Register your models here.
