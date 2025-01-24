from django.db import models

# Create your models here.
#  Categories and Sub 
class Category(models.Model):

    name = models.CharField(max_length=50, null=False)
    description = models.TextField(max_length=150, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta():
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name
    
class SubCategory(models.Model):

    parent = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null=False)
    description = models.TextField(max_length=150, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    class Meta():
        verbose_name_plural = "Sub Categories"
    def __str__(self):
        return self.name