from rest_framework import serializers
from api.category.serializers import SubCategorySerializer

from .models import *


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['name', 'src']

class AttributeValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = AttributeValue
        fields = ['value']


class ProductSkuSerializer(serializers.ModelSerializer):
    size = AttributeValueSerializer()   # Size for the product
    color = AttributeValueSerializer()  # Color for the product
        
    class Meta:
        model = ProductSku
        fields = ['id', 'current_price', 'was_price', 'color', 'size']


class ProductSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many = True)
    SKUs = ProductSkuSerializer(many = True)
    category = SubCategorySerializer()
    class Meta:
        model = Product
        fields = [
            'id', 
            'name', 
            'description', 
            'brand', 
            'category', 
            'created_at', 
            'SKUs', 
            'images' 

        ]

