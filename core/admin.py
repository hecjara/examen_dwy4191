from django.contrib import admin
from .models import EstadoTienda, EstadoProducto, EstadoLista, Lista, Producto, Region, Comuna, Tienda
# Register your models here.

class ListaAdmin(admin.ModelAdmin):
    list_display = ('total_productos_agregados', 'total_productos_comprados', 'costo_total_presupuestado', 'costo_total_real', 'estadoLista')
    search_fields = ['total_productos_agregados', 'total_productos_comprados', 'costo_total_presupuestado', 'costo_total_real', 'estadoLista']
    list_filter = ('estadoLista',)


admin.site.register(EstadoTienda)
admin.site.register(EstadoProducto)
admin.site.register(EstadoLista)
admin.site.register(Lista, ListaAdmin)
admin.site.register(Producto)
admin.site.register(Region)
admin.site.register(Comuna)
admin.site.register(Tienda)