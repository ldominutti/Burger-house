from .models import Order
from rest_framework import viewsets
from .serializer import OrderSerializer


def save_order(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        address = request.POST.get('address')
        phone_number = request.POST.get('phone_number')
        products = request.POST.get('products')

        order = Order(name=name, address=address, phone_number=phone_number, products=products)
        order.save()

class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()