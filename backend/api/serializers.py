from rest_framework import serializers
from .models import Users, Groups


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['id', 'Email', 'Group', 'Admin']


class GroupsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Groups
        fields = ['id', 'Name', 'Data_Analytics', 'Services_Analytics',
                  'Voice_Analytics', 'Queue_Stats', 'Voice_Stats', 'Video', 'Smart_Access', 'Diagrams']
