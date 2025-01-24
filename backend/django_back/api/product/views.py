from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import ProductSerializer
from django.http import JsonResponse
from .models import Product

# Create your views here.


@api_view (['Get'])
def GetProduct(request, id):
    data = Product.objects.get(pk=id)
    serializer = ProductSerializer(data, many=False)
    return JsonResponse(serializer.data, safe=False)
