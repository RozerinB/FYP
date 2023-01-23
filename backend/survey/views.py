from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SurveySerializer
from .models import Survey

# Create your views here.

class SurveyView(viewsets.ModelViewSet):
    serializer_class = SurveySerializer
    queryset = Survey.objects.all()
# Create your views here.
