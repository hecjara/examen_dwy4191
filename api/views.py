from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, HttpResponseBadRequest
import json
from core.models import EstadoLista, EstadoProducto, EstadoTienda, Producto, Lista, Tienda, Region, Comuna

# Create your views here.
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt


def listar_listas(request):
    listas = Lista.objects.all()

    listasJson = serializers.serialize('json', listas)


    return HttpResponse(listasJson, content_type="application/json")

@csrf_exempt
@require_http_methods(['POST'])
def agregar_lista(request):
    body = request.body.decode('utf-8')

    body_diccionario = json.loads(body)

    lista = Lista()
    lista.total_productos_agregados = body_diccionario['total_productos_agregados']
    lista.total_productos_comprados = body_diccionario['total_productos_comprados']
    lista.costo_total_presupuestado = body_diccionario['costo_total_presupuestado']
    lista.costo_total_real = body_diccionario['costo_total_real']
    lista.estadoLista = EstadoLista(id=body_diccionario['estadoLista_id'])

    try:
        lista.save()
        mensaje = {
            'mensaje':'Guardado correctamente'
        }
        return HttpResponse(json.dumps(mensaje), content_type="application/json")
    except:
        mensaje = {
            'mensaje':'Error al guardar'
        }
        return HttpResponseBadRequest(json.dumps(mensaje), content_type="application/json")


@csrf_exempt
@require_http_methods(['PUT'])
def modificar_lista(request):
    body = request.body.decode('utf-8')

    body_diccionario = json.loads(body)

    lista = Lista()
    lista.id = body_diccionario['id']
    lista.total_productos_agregados = body_diccionario['total_productos_agregados']
    lista.total_productos_comprados = body_diccionario['total_productos_comprados']
    lista.costo_total_presupuestado = body_diccionario['costo_total_presupuestado']
    lista.costo_total_real = body_diccionario['costo_total_real']
    lista.estadoLista = EstadoLista(id=body_diccionario['estadoLista_id'])

    try:
        lista.save()
        mensaje = {
            'mensaje':'Modificado correctamente'
        }
        return HttpResponse(json.dumps(mensaje), content_type="application/json")
    except:
        mensaje = {
            'mensaje':'Error al modificar'
        }
        return HttpResponseBadRequest(json.dumps(mensaje), content_type="application/json")


@csrf_exempt
@require_http_methods(['DELETE'])
def eliminar_lista(request, id):

    try:
        lista = Lista.objects.get(id=id)
        lista.delete()
        mensaje = {
            'mensaje':'Eliminado correctamente'
        }
        return HttpResponse(json.dumps(mensaje), content_type="application/json")
    except:
        mensaje = {
            'mensaje':'No se ha podido eliminar'
        }
        return HttpResponseBadRequest(json.dumps(mensaje), content_type="application/json")