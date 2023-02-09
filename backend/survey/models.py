from django.db import models

# Create your models here.

class DesignPrinciple(models.Model):
    principle1 = models.IntegerField(default=None)
    principle2 = models.IntegerField(default=None)
    principle3 = models.IntegerField(default=None)
    principle4 = models.IntegerField(default=None)
    principle5 = models.IntegerField(default=None)
    principle6 = models.IntegerField(default=None)
    principle7 = models.IntegerField(default=None)
    
class Survey(models.Model):
    age = models.PositiveIntegerField(default=18)
    gender = models.TextField(default="")
    preferred_writing_language = models.TextField(default="")
    preferred_reading_language = models.TextField(default="")
    country = models.TextField(default="")
    nationality = models.TextField(default="")
    ethnicity = models.TextField(default="")
    text_directionality = models.TextField(default="")
    internet_stability = models.TextField(default="")
    broadband_contract = models.TextField(default="")
    age_first_used_technology = models.PositiveIntegerField(default=18)
    competency_level = models.TextField(default="")
    age_when_first_owned_device = models.PositiveIntegerField(default=18)
    device_ownership_status = models.TextField(default="")
    device_sharing_status = models.TextField(default="")
    device_type_owned = models.TextField(default="")
    device_access = models.TextField(default="")
    client_id = models.CharField(max_length=100, primary_key=True, default=None)
    design_principles = models.ForeignKey(DesignPrinciple, on_delete=models.CASCADE, default=None)
    
    def _str_(self):
        return self.client_id

