from django.shortcuts import render, redirect
from .models import EstadoLista, EstadoProducto, EstadoTienda, Producto, Lista, Region, Comuna, Tienda
from django.contrib import messages

# Create your views here.

def home(request):
    return render(request, 'core/home.html')


#CRUD DE LISTAS

#metodo para agregar listas 
def agregarlista(request):
    #valores por defecto para una lista recien creada var0 y var1
    var0 = 0    #con var0 quiere decir que la lista comenzara con ambas cantidades de producto en 0 de igual manera para los valores de dinero pues no tendra productos agregados que contar
    var1 = 1    #var1 quiere decir el id 1 de estados el cual corresponde al estado de la lista "No completada"

    lista = Lista()
    lista.total_productos_agregados = var0
    lista.total_productos_comprados = var0
    lista.costo_total_presupuestado = var0
    lista.costo_total_real = var0
    estado = EstadoLista()
    estado.id = var1
    lista.estadoLista = estado

    try:
        lista.save()
        messages.success(request, 'Lista agregada correctamente')
    except:
        messages.error(request, 'No se ha podido agregar la lista')
    return redirect('listado_listas')

#metodo para listar las listas
def listar_listas(request):

    listas = Lista.objects.all()

    return render(request, 'core/listar_listas.html', {
        'listas':listas
    })

