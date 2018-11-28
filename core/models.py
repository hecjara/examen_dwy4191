from django.db import models

# Create your models here.

class EstadoTienda(models.Model):
    nombre = models.CharField(max_length=30, verbose_name="Estado Tienda")

    def __str__(self):
        return self.nombre


class EstadoProducto(models.Model):
    nombre = models.CharField(max_length=30, verbose_name="Estado Producto")

    def __str__(self):
        return self.nombre

class EstadoLista(models.Model):
    nombre = models.CharField(max_length=30, verbose_name="Estado Lista")

    def __str__(self):
        return self.nombre
        
class Lista(models.Model):
    total_productos_agregados = models.IntegerField(verbose_name="Productos Agregados")
    total_productos_comprados = models.IntegerField(verbose_name="Productos Comprados")
    costo_total_presupuestado = models.IntegerField(verbose_name="Total Presupuestado")
    costo_total_real = models.IntegerField(verbose_name="Total Real")
    estadoLista = models.ForeignKey(EstadoLista, on_delete=models.CASCADE, verbose_name="Estado Lista")

class Producto(models.Model):
    nombre = models.CharField(max_length=50)
    costo_real = models.IntegerField(verbose_name="Costo Real")
    costo_presupuestado = models.IntegerField(verbose_name="Costo Presupuestado")
    notas_adicionales = models.CharField(max_length=200, null=True, verbose_name="Notas Adicionales")
    estadoProducto = models.ForeignKey(EstadoProducto, on_delete=models.CASCADE, verbose_name="Estado Producto")
    lista = models.ForeignKey(Lista, on_delete=models.CASCADE)

class Region(models.Model):
    nro_region = models.IntegerField(unique=True, verbose_name="Nro. Región")
    nombre = models.CharField(max_length=60)
    
    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "Región"
        verbose_name_plural = "Regiones"

class Comuna(models.Model):
    nombre = models.CharField(max_length=60)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Tienda(models.Model):
    nombre = models.CharField(max_length=50)
    nombre_sucursal = models.CharField(max_length=50, null=True, verbose_name="Nombre Sucursal")
    direccion = models.CharField(max_length=50)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    comuna = models.ForeignKey(Comuna, on_delete=models.CASCADE)
    estado_tienda = models.ForeignKey(EstadoTienda, on_delete=models.CASCADE, verbose_name="Estado Tienda")
