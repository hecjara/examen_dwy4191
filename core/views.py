from django.shortcuts import render, redirect
from .models import EstadoLista, EstadoProducto, EstadoTienda, Producto, Lista, Region, Comuna, Tienda
from django.contrib import messages

# Create your views here.

def home(request):
    return render(request, 'core/home.html')



####################################################################################################################
                                                #CRUD LISTAS
####################################################################################################################

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

#metodo para eliminar listas
def eliminar_lista(request, id):
    #buscar la lista a eliminar
    lista = Lista.objects.get(id=id)

    try:
        lista.delete()
        mensaje = "Eliminado correctamente"
        messages.success(request, mensaje)
    except:
        mensaje = "No se ha podido eliminar"
        messages.error(request, mensaje)
    return redirect('listado_listas')

####################################################################################################################
                                                #CRUD PRODUCTOS
####################################################################################################################

def listar_productos(request, id):
    #Producto.lista es la FK de lista en la tabla producto
    #obtener los productos que tengan el id de la lista seleccionada
    productos = Producto.objects.filter(lista=id)

    return render(request, 'core/listar_productos.html', {
        'productos':productos
    })



####################################################################################################################
                                                #CRUD TIENDAS
####################################################################################################################

def agregartienda(request):
    var1 = 1    #estado por defecto de la tienda pendiente, el admin lo pasara a estado 2 o 3 (aceptado o rechazado respectivamente)
    regiones = Region.objects.all()
    comunas = Comuna.objects.all()
    variables = {
        'regiones':regiones,
        'comunas':comunas
    }

    if request.POST:
        tienda = Tienda()
        tienda.nombre = request.POST.get('txtnombre')
        tienda.nombre_sucursal = request.POST.get('txtnom_sucur')
        tienda.direccion = request.POST.get('txtdireccion')
        comuna = Comuna()
        comuna.id = request.POST.get('cbocomuna')
        tienda.comuna = comuna
        estado = EstadoTienda() 
        estado.id = var1 #pendiente por defecto
        tienda.estado_tienda = estado

        try:
            tienda.save()
            variables['mensaje'] = 'La solicitud ha sido enviada correctamente, a la espera de ser aprobada.'
        except:
            variables['mensaje'] = 'Ha ocurrido un error al intentar enviar la solicitud'
        
    return render(request, 'core/form_tienda.html', variables)





