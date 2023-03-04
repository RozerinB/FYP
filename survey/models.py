from django.db import models
# from django_cryptography.fields import encrypt

def encrypt(fields):
    return fields
class DesignPrinciple(models.Model):
    principle1 = models.IntegerField(default=None, blank=True)
    principle2 = models.IntegerField(default=None, blank=True)
    principle3 = models.IntegerField(default=None, blank=True)
    principle4 = models.IntegerField(default=None, blank=True)
    principle5 = models.IntegerField(default=None, blank=True)
    principle6 = models.IntegerField(default=None, blank=True)
    principle7 = models.IntegerField(default=None, blank=True)
    
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
    age_first_used_technology = encrypt(models.IntegerField(default=None, blank=True))
    competency_level = encrypt(models.TextField(default=""))
    age_when_first_owned_device = encrypt(models.IntegerField(default=None, blank=True))
    device_ownership_status = encrypt(models.TextField(default=""))
    device_sharing_status = encrypt(models.TextField(default=""))
    device_type_owned = encrypt(models.JSONField(default=list))
    device_access = models.JSONField(default=list)
    design_principles = models.ForeignKey(DesignPrinciple, on_delete=models.CASCADE, default=None, blank=True)
    time_personal_home_life = models.TextField(blank=True)
    good_performance = models.TextField(blank=True)
    employment = models.TextField(blank=True)
    pleasant_people = models.TextField(blank=True)
    work_interesting = models.TextField(blank=True)
    consulted_by_superiors = models.TextField(blank=True)
    desirable_area = models.TextField(blank=True)
    respected_by_family = models.TextField(blank=True)
    chances_for_promotion = models.TextField(blank=True)
    keeping_time_for_fun = models.TextField(blank=True)
    moderation = models.TextField(blank=True)
    service_to_friend = models.TextField(blank=True)
    thrift = models.TextField(blank=True)
    nervous_tense = models.TextField(blank=True)
    happiness = models.TextField(blank=True)
    prevention_due_to_circumstances = models.TextField(blank=True)
    state_of_health = models.TextField(blank=True)
    proud_citizen = models.TextField(blank=True)
    contradicting_superior = models.TextField(blank=True)
    good_manager = models.TextField(blank=True)
    persistent_efforts = models.TextField(blank=True)
    organization_structure = models.TextField(blank=True)
    organization_rules = models.TextField(blank=True)
    education = models.TextField(blank=True)
    job = models.TextField(blank=True)
    consent_form = models.BooleanField(default=False)
    nationality_from_birth = models.TextField( blank=True)
    
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