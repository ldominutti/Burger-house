from django.db import models

class Order(models.Model):
    name = models.CharField(max_length=30)
    address = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20)
    products = models.JSONField()

    def __str__(self):
        return self.name
# Create your models here.
