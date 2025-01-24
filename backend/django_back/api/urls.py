from django.urls import path, include

urlpatterns = [
    path('products/', include('api.product.urls') ),
    path('categories/', include('api.category.urls') ),
]
