from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
# Create your views here.

'''
# ------ GET All Products By Category
@api_view(['Get'])
def productsList(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return JsonResponse(serializer.data,safe=False)


#------- Get One Product Details
@api_view(['GET'])
def ProductDetails(request, pk):
    try:
        product = Product.objects.get(pk=pk)
        serializer = ProductSerializer(product, many=False)
        return JsonResponse(serializer.data, safe=False)
    except Product.DoesNotExist:
        return JsonResponse({'detail': 'Product not found.'}, status=404)
        '''