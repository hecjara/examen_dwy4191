from django.urls import path
from .views import listar_listas, agregar_lista, modificar_lista, eliminar_lista
urlpatterns = [
    path('listas/', listar_listas, name="api_listar_listas"),
    path('listas/agregar/', agregar_lista, name="api_agregar_lista"),
    path('listas/modificar/', modificar_lista, name="api_modificar_lista"),
    path('listas/<id>/eliminar/', eliminar_lista, name="api_eliminar_lista"),
]