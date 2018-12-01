
from django.urls import path
from .views import home, listar_listas, agregarlista, eliminar_lista, listar_productos, agregartienda, listar_solicitud, aprobartienda, rechazartienda, eliminarsolicitud, tiendasrechazadas, tiendasaprobadas, form_producto, estado_comprado, estado_nocomprado



urlpatterns = [
    path('', home, name="home"),
    path('listar_listas/', listar_listas, name="listado_listas"),
    path('agregarlista/', agregarlista, name="agregar_lista"),
    path('eliminar-lista/<id>/', eliminar_lista, name="eliminar_lista"),
    path('listar-productos/<id>/', listar_productos, name="listar_productos"),
    path('agregar_tienda/', agregartienda, name="agregar_tienda"),
    path('listar_solicitud/', listar_solicitud, name="listar_solicitud"),
    path('aprobar_solicitud/<id>/', aprobartienda, name="aprobar_solicitud"),
    path('rechazar_solicitud/<id>/', rechazartienda, name="rechazar_solicitud"),
    path('eliminar_solicitud/<id>/', eliminarsolicitud, name="eliminar_solicitud"),
    path('tiendas_rechazadas/', tiendasrechazadas, name="tiendas_rechazadas"),
    path('tiendas_aprobadas/', tiendasaprobadas, name="tiendas_aprobadas"),
    path('form_producto/<id>/', form_producto, name="form_producto"),
    path('estado_comprado/<id>/', estado_comprado, name="estado_comprado"),
    path('estado_nocomprado/<id>/', estado_nocomprado, name="estado_nocomprado"),

    

]
