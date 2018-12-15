function validarLista() {
    valor = document.getElementById("txtnombre").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert("El cambio nombre esta vacio");
        return false;
    }

}

function validarProducto() {

    nombre = document.getElementById("txtnombre").value;
    real = document.getElementById("txtreal").value;
    presu = document.getElementById("txtpresu").value;
    tienda = document.getElementById("cbotienda").value;
    notas = document.getElementById("txtnotas").value;

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("Ingrese el nombre del producto");
        return false;
    }

    if (real == null || real.length == 0 || /^\s+$/.test(real)) {
        alert("Ingrese el valor real del producto");
        return false;
    }
    else if (isNaN(real)) {
        alert("Ingrese el valor real del producto");
        return false;
    }
    else if(real <= 0){
        alert("El valor del producto no puede ser menor o igual a cero");
        return false;
    }

    if (presu == null || presu.length == 0 || /^\s+$/.test(presu)) {
        alert("Ingrese el valor presupuestado del producto");
        return false;
    }
    else if (isNaN(presu)) {
        alert("Ingrese el valor presupuestado del producto");
        return false;
    }
    else if(real <= 0){
        alert("El valor presupuestado del producto no puede ser menor o igual a cero");
        return false;
    }

    if (tienda == null || tienda == 0) {
        alert("Seleccione una tienda");
        return false;
    }

    if (notas == null || notas.length == 0 || /^\s+$/.test(notas)) {
        alert("Ingrese las notas del producto");
        return false;
    }

}

function validarTienda(){
    nombre = document.getElementById("txtnombre").value;
    sucur = document.getElementById("txtnom_sucur").value;
    direccion = document.getElementById("txtdireccion").value;
    region = document.getElementById("cboregion").value;
    comuna = document.getElementById("cbocomuna").value;

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert("Ingrese el nombre de la tienda");
        return false;
    }

    if (sucur == null || sucur.length == 0 || /^\s+$/.test(sucur)) {
        alert("Ingrese el nombre de la sucursal");
        return false;
    }

    if (direccion == null || direccion.length == 0 || /^\s+$/.test(direccion)) {
        alert("Ingrese la dirección de la tienda");
        return false;
    }

    if (region == null || region == 0) {
        alert("Seleccione la región de la tienda");
        return false;
    }

    if (comuna == null || comuna == 0) {
        alert("Seleccione la comuna de la tienda");
        return false;
    }

}