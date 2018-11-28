from django.shortcuts import render, redirect
from .models import EstadoLista, EstadoProducto, EstadoTienda, Producto, Lista, Region, Comuna, Tienda
from django.contrib import messages

# Create your views here.

def home(request):
    return render(request, 'core/home.html')


#CRUD DE LISTAS

def listar_listas(request):

    listas = Lista.objects.all()

    return render(request, 'core/listar_listas.html', {
        'listas':listas
    })


def eliminar_lista(request, id):
    #buscar la lista a eliminar
    lista = Lista.objects.get(id=id)

    try:
        lista.delete()
        mensaje = "Eliminado correctamente"
        messages.success(request, mensaje)
    except:
        mensaje = "Error al intentar eliminar"
        messages.error(request, mensaje)

    return redirect('listado_listas')
