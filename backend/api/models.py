from django.db import models


# Create your models here.

class Groups(models.Model):
    Name = models.CharField(max_length=100, unique=True)
    Data_Analytics = models.BooleanField()
    Services_Analytics = models.BooleanField()
    Voice_Analytics = models.BooleanField()
    Queue_Stats = models.BooleanField()
    Voice_Stats = models.BooleanField()
    Video = models.BooleanField()
    Smart_Access = models.BooleanField()
    Diagrams = models.BooleanField()

    def __str__(self):
        return self.Name


class Users(models.Model):
    Email = models.CharField(max_length=100)
    Group = models.ForeignKey(Groups, models.PROTECT, to_field="Name", null=True)
    Admin = models.BooleanField()

    def __str__(self):
        return self.Email

