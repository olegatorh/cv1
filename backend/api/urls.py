from django.urls import path, include
from .views import UsersViewSet, GroupsViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("Users", UsersViewSet, basename='Users')
router.register("Groups", GroupsViewSet, basename='Groups')


urlpatterns = [
    path('api/', include(router.urls))
]
