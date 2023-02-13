from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SurveySerializer, EvaluationSerializer
from .models import Survey, Evaluation

class SurveyView(viewsets.ModelViewSet):
    serializer_class = SurveySerializer
    queryset = Survey.objects.all()
    
class EvaluationView(viewsets.ModelViewSet):
    serializer_class = EvaluationSerializer
    queryset = Evaluation.objects.all()