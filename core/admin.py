from django.contrib import admin
from .models import EstadoTienda, EstadoProducto, EstadoLista, Lista, Producto, Region, Comuna, Tienda
# Register your models here.

class ListaAdmin(admin.ModelAdmin):
    list_display = ('id', 'total_productos_agregados', 'total_productos_comprados', 'costo_total_presupuestado', 'costo_total_real', 'estadoLista')
    search_fields = ['total_productos_agregados', 'total_productos_comprados', 'costo_total_presupuestado', 'costo_total_real', 'estadoLista']
    list_filter = ('estadoLista',)

class ComunaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'region')
    search_fields = ['nombre']
    list_filter = ('region',)

class RegionAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre')
    search_fields = ['nombre']

class ProductoAdmin(admin.ModelAdmin):
    list_display = ('id', 'lista','nombre', 'costo_presupuestado', 'costo_real', 'tienda', 'notas_adicionales')
    search_fields = ['id', 'lista', 'nombre']
    list_filter = ('lista',)

class TiendaAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'nombre_sucursal', 'direccion', 'comuna', 'estado_tienda')
    search_files = ['nombre', 'nombre_sucursal']
    list_filter = ('comuna', 'estado_tienda',)



admin.site.register(EstadoTienda)
admin.site.register(EstadoProducto)
admin.site.register(EstadoLista)
admin.site.register(Lista, ListaAdmin)
admin.site.register(Producto, ProductoAdmin)
admin.site.register(Region, RegionAdmin)
admin.site.register(Comuna, ComunaAdmin)
admin.site.register(Tienda, TiendaAdmin)