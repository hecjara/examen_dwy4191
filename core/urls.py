
from django.urls import path
from .views import home, listar_listas, agregarlista, eliminar_lista, listar_productos, agregartienda



urlpatterns = [
    path('', home, name="home"),
    path('listar_listas/', listar_listas, name="listado_listas"),
    path('agregarlista/', agregarlista, name="agregar_lista"),
    path('eliminar-lista/<id>/', eliminar_lista, name="eliminar_lista"),
    path('listar-productos/<id>/', listar_productos, name="listar_productos"),
    path('agregar_tienda/', agregartienda, name="agregar_tienda"),

]
