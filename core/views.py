from django.shortcuts import render, redirect
from .models import EstadoLista, EstadoProducto, EstadoTienda, Producto, Lista, Region, Comuna, Tienda
from django.contrib import messages
from fcm_django.models import FCMDevice
from django.contrib.auth.decorators import login_required

# Create your views here.


def home(request):
    return render(request, 'core/home.html')


def tiendasrechazadas(request):
    rechazadas = Tienda.objects.filter(estado_tienda=3)
    return render(request, 'core/tiendas_rechazadas.html', {
        'rechazadas': rechazadas
    })


def tiendasaprobadas(request):
    aprobadas = Tienda.objects.filter(estado_tienda=2)
    return render(request, 'core/tiendas_aprobadas.html', {
        'aprobadas': aprobadas
    })


#####################################################################################################################
    # CRUD LISTAS
#####################################################################################################################

# metodo para agregar listas
@login_required
def agregarlista(request):
    # valores por defecto para una lista recien creada var0 y var1
    var0 = 0  # con var0 quiere decir que la lista comenzara con ambas cantidades de producto en 0 de igual manera para los valores de dinero pues no tendra productos agregados que contar
    var1 = 1  # var1 quiere decir el id 1 de estados el cual corresponde al estado de la lista "No completada"

    lista = Lista()
    lista.user = request.user
    lista.nombre_lista = request.POST.get('txtnombre')
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

# metodo para listar las listas


@login_required
def listar_listas(request):
    listas = Lista.objects.filter(usuario=request.user)

    return render(request, 'core/listar_listas.html', {
        'listas': listas
    })


@login_required
def crear_lista(request):

    if request.POST:
        lista = Lista()
        lista.usuario = request.user
        lista.nombre_lista = request.POST.get('txtnombre')
        lista.total_productos_agregados = 0
        lista.total_productos_comprados = 0
        lista.costo_total_presupuestado = 0
        lista.costo_total_real = 0
        estado = EstadoLista()
        estado.id = 1
        lista.estadoLista = estado

        try:
            lista.save()
            messages.success(request, 'Lista agregada correctamente')
        except:
            messages.error(request, 'No se ha podido agregar la lista')
    return render(request, 'core/crear_lista.html')

# metodo para eliminar listas


@login_required
def eliminar_lista(request, id):
    # buscar la lista a eliminar
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
    # CRUD PRODUCTOS
####################################################################################################################


@login_required
def listar_productos(request, id):
    # Producto.lista es la FK de lista en la tabla producto
    # obtener los productos que tengan el id de la lista seleccionada
    productos = Producto.objects.filter(lista=id)

    return render(request, 'core/listar_productos.html', {
        'productos': productos
    })


@login_required
def form_producto(request, id):
    li = Lista.objects.get(id=id)
    ti = Tienda.objects.all()
    variables = {
        'li': li,
        'ti': ti
    }
    # agregar nombre lista
    if request.POST:
        producto = Producto()
        li.id = request.POST.get('txtidlista')
        producto.lista = li
        producto.nombre = request.POST.get('txtnombre')
        producto.costo_presupuestado = request.POST.get('txtpresu')
        producto.costo_real = request.POST.get('txtreal')
        producto.notas_adicionales = request.POST.get('txtnotas')
        estado = EstadoProducto()
        estado.id = 2  # no comprado por defecto
        producto.estadoProducto = estado
        tienda = Tienda()
        tienda.id = request.POST.get('cbotienda')
        producto.tienda = tienda

        # agregar el valor del producto a la lista
        li.costo_total_presupuestado = li.costo_total_presupuestado + \
            int(request.POST.get('txtpresu'))
        li.costo_total_real = li.costo_total_real + \
            int(request.POST.get('txtreal'))
        li.total_productos_agregados = li.total_productos_agregados + 1

        try:
            producto.save()
            li.save()

            variables['mensaje'] = 'El producto ha sido agregado a la lista'
        except:
            variables['mensaje'] = 'Error al intentar agregar el producto a la lista'

    return render(request, 'core/form_producto.html', variables)


# para capturar el error e imprimirlo!!!
# except Exception as e:
#variables['mensaje'] = 'no guardado '+ str(e)

@login_required
def eliminar_producto(request, id):
    producto = Producto.objects.get(id=id)
    lista = Lista.objects.get(id=producto.lista.id)

    # restar un producto comprado a la lista
    lista.total_productos_comprados = int(lista.total_productos_comprados) - 1
    lista.total_productos_agregados = int(lista.total_productos_agregados) - 1
    lista.costo_total_real = (
        int(lista.costo_total_real) - int(producto.costo_real))
    lista.costo_total_presupuestado = (
        int(lista.costo_total_presupuestado) - int(producto.costo_presupuestado))

    try:
        producto.delete()
        lista.save()
        messages.success(request, 'El producto ha sido eliminado de la lista')
    except:
        messages.error(
            request, 'Error al intentar eliminar el producto')

    return redirect('listado_listas')


# cambiar a comprado
@login_required
def estado_comprado(request, id):
    producto = Producto.objects.get(id=id)
    lista = Lista.objects.get(id=producto.lista.id)
    estadolista = EstadoLista()

    # agregar un producto comprado a la lista
    lista.total_productos_comprados = int(lista.total_productos_comprados) + 1

    estado = EstadoProducto()
    estado.id = 1  # 1 = comprado
    producto.estadoProducto = estado

    if lista.total_productos_agregados == lista.total_productos_comprados:
        estadolista.id = 2
        lista.estadoLista = estadolista
    else:
        estadolista.id = 1
        lista.estadoLista = estadolista

    try:
        producto.save()
        lista.save()

        if lista.total_productos_agregados == lista.total_productos_comprados:
            dispositivos = FCMDevice.objects.all()
            dispositivos.send_message(
                title="Alerta Listas!",
                body="Se ha completado la lista " + lista.nombre_lista,
                icon="/static/core/img/carrito.png"
            )

        messages.success(request, 'El producto ha cabiado a estado "Comprado"')
    except:
        messages.error(
            request, 'Error al intentar cambiar el estado del producto')

    return redirect('listado_listas')

# cambiar a no comprado


@login_required
def estado_nocomprado(request, id):
    producto = Producto.objects.get(id=id)
    lista = Lista.objects.get(id=producto.lista.id)
    estadolista = EstadoLista()

    # restar un producto comprado a la lista
    lista.total_productos_comprados = int(lista.total_productos_comprados) - 1

    estado = EstadoProducto()
    estado.id = 2  # 2 = no comprado
    producto.estadoProducto = estado

    if lista.total_productos_agregados > lista.total_productos_comprados:
        estadolista.id = 1
        lista.estadoLista = estadolista
    elif lista.total_productos_agregados == lista.total_productos_comprados:
        estadolista.id = 2
        lista.estadoLista = estadolista

    try:
        producto.save()
        lista.save()
        messages.success(
            request, 'El producto ha cabiado a estado "No Comprado"')
    except:
        messages.error(
            request, 'Error al intentar cambiar el estado del producto')

    return redirect('listado_listas')


####################################################################################################################
    # CRUD TIENDAS
####################################################################################################################
# listar solicitudes de tiendas con estado pendiente
@login_required
def listar_solicitud(request):
    pendientes = Tienda.objects.filter(estado_tienda=1)
    return render(request, 'core/listar_solicitud.html', {
        'pendientes': pendientes
    })

# solicitud para agregar tienda


@login_required
def agregartienda(request):
    # estado por defecto de la tienda pendiente, el admin lo pasara a estado 2 o 3 (aceptado o rechazado respectivamente)
    var1 = 1
    regiones = Region.objects.all()
    comunas = Comuna.objects.all()
    variables = {
        'regiones': regiones,
        'comunas': comunas
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
        estado.id = var1  # pendiente por defecto
        tienda.estado_tienda = estado

        try:
            tienda.save()
            variables['mensaje'] = 'La solicitud ha sido enviada correctamente, a la espera de ser aprobada.'
        except:
            variables['mensaje'] = 'Ha ocurrido un error al intentar enviar la solicitud'

    return render(request, 'core/form_tienda.html', variables)

# aprobar la solicitud


@login_required
def aprobartienda(request, id):
    tienda = Tienda.objects.get(id=id)

    estado = EstadoTienda()
    estado.id = 2  # 2 = aprobado
    tienda.estado_tienda = estado

    try:
        tienda.save()
        messages.success(request, 'Tienda aprobada correctamente')
    except:
        messages.error(request, 'Error al intentar aprobar la tienda')

    return redirect('listar_solicitud')

# rechazhar la solicitud


@login_required
def rechazartienda(request, id):
    tienda = Tienda.objects.get(id=id)

    estado = EstadoTienda()
    estado.id = 3  # 3 = rechazado
    tienda.estado_tienda = estado

    try:
        tienda.save()
        messages.success(request, 'La tienda ha sido rechazada')
    except:
        messages.error(request, 'Error al intentar rechazar la tienda')

    return redirect('listar_solicitud')

# eliminar la solicitud


@login_required
def eliminarsolicitud(request, id):
    tienda = Tienda.objects.get(id=id)

    try:
        tienda.delete()
        messages.success(
            request, "La solicitud ha sido eliminada correctamente")
    except:
        messages.error(request, "Error al intentar eliminar la solicitud")
    return redirect('listar_solicitud')
