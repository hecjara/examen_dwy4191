
from django.urls import path
from .views import home, listar_listas, agregarlista



urlpatterns = [
    path('', home, name="home"),
    path('listar_listas/', listar_listas, name="listado_listas"),
    path('agregarlista/', agregarlista, name="agregar_lista"),
]
