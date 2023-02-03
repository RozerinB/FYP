from django.db import models
from django.db import models

# Create your models here.

class Survey(models.Model):
    age = models.PositiveIntegerField(default=18)
    gender = models.TextField(default="")
    languageToWrite = models.TextField(default="")
    languageToRead = models.TextField(default="")
    country = models.TextField(default="")
    nationality = models.TextField(default="")
    ethnicity = models.TextField(default="")
    textDirectionality = models.TextField(default="")
    internetStability = models.TextField(default="")
    broadbandContract = models.TextField(default="")
    ageForTech = models.PositiveIntegerField(default=18)
    competency = models.TextField(default="")
    ageForDevice = models.PositiveIntegerField(default=18)
    deviceOwnership = models.TextField(default="")
    deviceShare = models.TextField(default="")
    deviceTypeOwnership = models.TextField(default="")
    deviceAccess = models.TextField(default="")
    # designPrinciples = models.TextField(default="")

    def _str_(self):
        return self.title

# Create your models here.
