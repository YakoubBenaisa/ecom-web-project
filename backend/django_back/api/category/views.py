from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from api.product.models import Product
from api.product.serializers import ProductSerializer
from api.category.models import SubCategory

# Create your views here.

@api_view(['GET'])
def GetProductsByCategory(request, category):
    
    products = Product.objects.filter(category__name=category)
    if products.exists():
        serializer = ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({'message': 'No products found in this category'}, status=404)
