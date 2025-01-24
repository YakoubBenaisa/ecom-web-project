from django.db import models
from api.category.models import SubCategory

# Create your models here.

# ----------------------------------------
# Product and Images
class Product(models.Model):

    name = models.CharField(max_length=25, null=False)
    description = models.TextField(max_length=600, null=True)
    brand = models.CharField(max_length=20, null=True)
    category = models.ForeignKey(SubCategory, null=True,on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta :
        ordering = ('-created_at',)
    def __str__(self):
        return self.name


class Image(models.Model):

    name = models.CharField(max_length=100, null= False)
    src = models.ImageField(upload_to='product_imgs')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.name
    
# -------------------------------------------------------
# Attributes 
class Attribute(models.Model):
    name = models.CharField(max_length=50)  # For example, 'Size', 'Color', etc.

    def __str__(self):
        return self.name

class AttributeValue(models.Model):
    attribute = models.ForeignKey(Attribute, on_delete=models.CASCADE)
    value = models.CharField(max_length=100, null=True)  # For example, 'S', 'M', 'Red', 'Blue', etc.
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.value

# ----------------------------------------------------
# Product
class ProductSku(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='SKUs')
    
    # ForeignKey for attributes
    size = models.ForeignKey(AttributeValue, null=True, related_name='size', on_delete=models.CASCADE)  # Size for the product
    color = models.ForeignKey(AttributeValue, related_name='color', on_delete=models.CASCADE)  # Color for the product
    
    current_price = models.DecimalField(max_digits=10, decimal_places=2, null=False)  
    was_price = models.DecimalField(max_digits=10, decimal_places=2, null=True)  
    quantity = models.PositiveIntegerField() 
    created_at = models.DateTimeField(auto_now_add=True, null=True)
 

    # Use unique_together on size and color fields (not ManyToManyField)
    class Meta:
        verbose_name = "Product SKU"
        unique_together = ('product', 'size', 'color')  # Ensures that the same size and color combination can't be used for the same product

    def __str__(self):
        return f"{self.product.name} - {self.size.value} - {self.color.value}"
