from django.urls import path, include
from . import views
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'orders', views.OrderView, 'orders')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Orders Api")),
    path('admin/', admin.site.urls),
]
