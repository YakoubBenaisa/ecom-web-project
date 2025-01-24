from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SubCategory
        fields = ['name', 'description']

class SubCategorySerializer(serializers.ModelSerializer):
    parent = CategorySerializer(read_only=True)  # Read-only nesting
    
    class Meta:
        model = SubCategory
        fields = ['id', 'parent', 'name', 'description']
        