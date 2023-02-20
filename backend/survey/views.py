from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SurveySerializer, EvaluationSerializer, ParticipantEvaluationSerializer
from .models import Survey, Evaluation, ParticipantEvaluation

class SurveyView(viewsets.ModelViewSet):
    serializer_class = SurveySerializer
    queryset = Survey.objects.all()
    
class EvaluationView(viewsets.ModelViewSet):
    serializer_class = EvaluationSerializer
    queryset = Evaluation.objects.all()
    
class ParticipantEvaluationView(viewsets.ModelViewSet):
    serializer_class = ParticipantEvaluationSerializer
    queryset = ParticipantEvaluation.objects.all()