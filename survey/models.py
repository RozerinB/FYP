from django.db import models
from django_cryptography.fields import encrypt, EncryptedMixin

# EncryptedMixin.db_type = models.Field.db_type
class DesignPrinciple(models.Model):
    principle1 = encrypt(models.TextField(default=None, blank=True))
    principle2 = encrypt(models.TextField(default=None, blank=True))
    principle3 = encrypt(models.TextField(default=None, blank=True))
    principle4 = encrypt(models.TextField(default=None, blank=True))
    principle5 = encrypt(models.TextField(default=None, blank=True))
    principle6 = encrypt(models.TextField(default=None, blank=True))
    principle7 = encrypt(models.TextField(default=None, blank=True))
    
class Survey(models.Model):
    role= models.TextField(default="")
    client_id = models.CharField(max_length=100, primary_key=True, default=None)
    age = encrypt(models.TextField(default="18-19"))
    gender = encrypt(models.TextField(default=""))
    preferred_writing_language = encrypt(models.TextField(default=""))
    preferred_reading_language = encrypt(models.TextField(default=""))
    country = encrypt(models.TextField(default=""))
    nationality = encrypt(models.TextField(default=""))
    ethnicity = encrypt(models.TextField(default=""))
    text_directionality = encrypt(models.TextField(default=""))
    internet_stability = encrypt(models.TextField(default=""))
    broadband_contract = encrypt(models.TextField(default=""))
    age_first_used_technology = encrypt(models.DecimalField(default=None, blank=True, decimal_places=0, max_digits=10))
    competency_level = encrypt(models.TextField(default=""))
    age_when_first_owned_device = encrypt(models.DecimalField(default=None, blank=True, decimal_places=0, max_digits=10))
    device_ownership_status = encrypt(models.TextField(default=""))
    device_sharing_status = encrypt(models.TextField(default=""))
    device_type_owned = encrypt(models.JSONField(default=list))
    device_access = encrypt(models.JSONField(default=list))
    design_principles = models.ForeignKey(DesignPrinciple, on_delete=models.CASCADE, default=None, blank=True)
    time_personal_home_life = encrypt(models.TextField(blank=True))
    good_performance = encrypt(models.TextField(blank=True))
    employment = encrypt(models.TextField(blank=True))
    pleasant_people = encrypt(models.TextField(blank=True))
    work_interesting = encrypt(models.TextField(blank=True))
    consulted_by_superiors = encrypt(models.TextField(blank=True))
    desirable_area = encrypt(models.TextField(blank=True))
    respected_by_family = encrypt(models.TextField(blank=True))
    chances_for_promotion = encrypt(models.TextField(blank=True))
    keeping_time_for_fun = encrypt(models.TextField(blank=True))
    moderation = encrypt(models.TextField(blank=True))
    service_to_friend = encrypt(models.TextField(blank=True))
    thrift = encrypt(models.TextField(blank=True))
    nervous_tense = encrypt(models.TextField(blank=True))
    happiness = encrypt(models.TextField(blank=True))
    prevention_due_to_circumstances = encrypt(models.TextField(blank=True))
    state_of_health = encrypt(models.TextField(blank=True))
    proud_citizen = encrypt(models.TextField(blank=True))
    contradicting_superior = encrypt(models.TextField(blank=True))
    good_manager = encrypt(models.TextField(blank=True))
    persistent_efforts = encrypt(models.TextField(blank=True))
    organization_structure = encrypt(models.TextField(blank=True))
    organization_rules = encrypt(models.TextField(blank=True))
    education = encrypt(models.TextField(blank=True))
    job = encrypt(models.TextField(blank=True))
    consent_form = models.BooleanField(default=False)
    nationality_from_birth = encrypt(models.TextField(blank=True))
    
    def _str_(self):
        return self.client_id

class Evaluation(models.Model):
    role= models.TextField(default="")
    client_id = models.CharField(max_length=100, primary_key=True, default=None)
    consent_form = models.BooleanField(default=False)
    usefulness_for_profession = models.TextField(default="")
    usefulness_for_profession_reason = models.TextField(default="")
    usefulness_for_researcher = models.TextField(default="")
    usefulness_for_researcher_reason = models.TextField(default="")
    design_for_non_western = models.TextField(default="")
    design_for_non_western_reason = models.TextField(default="")
    design_for_western = models.TextField(default="")
    design_for_western_reason = models.TextField(default="")
    feedback = models.TextField(default="")
    
    def _str_(self):
        return self.client_id
    
class ParticipantEvaluation(models.Model):
    correlation= models.BooleanField(default=False)
    no_correlation_reason = models.TextField(default="", blank=True)
    correlation_culture = models.BooleanField(default=False)
    no_correlation_culture_reason = models.TextField(default="", blank=True)
    correlation_ethnicity = models.TextField(default="")
    no_correlation_ethnicity_reason = models.TextField(default="", blank=True)
    correlation_age = models.TextField(default="")
    no_correlation_age_reason = models.TextField(default="", blank=True)
    correlation_nationality = models.TextField(default="")
    no_correlation_nationality_reason = models.TextField(default="", blank=True)
    representation_of_user = models.BooleanField(default=False)
    no_representation_reason = models.TextField(default="", blank=True)
    generalisability = models.BooleanField(default=False)
    no_generalisability_reason = models.TextField(default="", blank=True)
    
    def _str_(self):
        return self.correlation