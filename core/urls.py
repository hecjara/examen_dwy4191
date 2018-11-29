
from django.urls import path
from .views import home, listar_listas, agregarlista, eliminar_lista



urlpatterns = [
    path('', home, name="home"),
    path('listar_listas/', listar_listas, name="listado_listas"),
    path('agregarlista/', agregarlista, name="agregar_lista"),
    path('eliminar-lista/<id>/', eliminar_lista, name="eliminar_lista"),
]
