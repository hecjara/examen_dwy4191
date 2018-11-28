
from django.urls import path
from .views import home, listar_listas, eliminar_lista




urlpatterns = [
    path('', home, name="home"),
    path('listar-listas/', listar_listas, name="listado_listas"),
    path('eliminar-lista/<id>/', eliminar_lista, name="eliminar_lista"),
]
