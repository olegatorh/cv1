from .models import Users, Groups
from rest_framework import viewsets
from .serializers import UserSerializer, GroupsSerializer

# Create your views here.


class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserSerializer


class GroupsViewSet(viewsets.ModelViewSet):
    queryset = Groups.objects.all()
    serializer_class = GroupsSerializer
