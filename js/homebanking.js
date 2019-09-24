//Declaración de variables
var nombreUsuario = 'Antonello Azul';
var saldoCuenta = 100;
var limiteExtraccion = 3000;
var Agua = 350;
var Telefono = 425;
var Luz = 210;
var Internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var password = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var cambioLimite = prompt("Ingrese nuevo limite de extraccion");
    limiteExtraccion = cambioLimite;
    actualizarLimiteEnPantalla();
    alert("Su nuevo limite de extraccion es: " + cambioLimite);
}

function extraerDinero() {
    var ingreso = prompt("ingrese monton que desea extraer");
    var saldoAnterior = saldoCuenta;
    
    if (ingreso > saldoCuenta) {
        alert("el monto a extraer es mayor que su saldo.");
    }
    else if (limiteExtraccion < ingreso) {
        alert("El monto supera el limite de extraccion");
    }
    else if (ingreso % 100 != 0) {
        alert("El cajero solo entrega billetes de 100");
    }
    else {
        restarACuenta(ingreso, saldoCuenta);
        actualizarSaldoEnPantalla();
        alert("Has retirado:" + ingreso + "\n Saldo anterior:" + saldoAnterior + "\n Saldo actual:" + saldoCuenta);
    }

}

function depositarDinero() {
    var ingreso = prompt("ingrese monton a depositar");
    var saldoAnterior = saldoCuenta;
    sumarACuenta(ingreso, saldoCuenta);
    actualizarSaldoEnPantalla();
    alert("Has depositado:" + ingreso + "\n Saldo anterior:" + saldoAnterior + "\n Saldo actual:" + saldoCuenta);
}

function pagarServicio() {
    var seleccionServicio = prompt("Elija el servicio que desea abonar" + "\n1-Agua" + "\n2-Luz" + "\n3-Internet" + "\n4-Telefono");
    switch (seleccionServicio) {
        case "1":
            if (saldoCuenta < Agua) {
                alert("Su saldo no es suficiente para abonar este servicio");
            }
            else {
                var saldoAnterior = saldoCuenta;
                saldoCuenta = saldoCuenta - Agua;
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio Agua" + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + Agua + "\nSaldo actual: " + saldoCuenta);
            }
            break;
        case "2":
            if (saldoCuenta < Luz) {
                alert("Su saldo no es suficiente para abonar este servicio");
            }
            else {
                var saldoAnterior = saldoCuenta
                saldoCuenta = saldoCuenta - Luz
                actualizarSaldoEnPantalla()
                alert("Has pagado el servicio Luz" + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + Luz + "\nSaldo actual: " + saldoCuenta)
            }
            break;
        case "3":
            if (saldoCuenta < Internet) {
                alert("Su saldo no es suficiente para abonar este servicio");
            }
            else {
                var saldoAnterior = saldoCuenta
                saldoCuenta = saldoCuenta - Internet
                actualizarSaldoEnPantalla()
                alert("Has pagado el servicio Internet" + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + Internet + "\nSaldo actual: " + saldoCuenta)
            }
            break;
        case "4":
            if (saldoCuenta < Telefono) {
                alert("Su saldo no es suficiente para abonar este servicio");
            }
            else {
                var saldoAnterior = saldoCuenta
                saldoCuenta = saldoCuenta - Telefono
                actualizarSaldoEnPantalla()
                alert("Has pagado el servicio Telefono" + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + Telefono + "\nSaldo actual: " + saldoCuenta)
            }
            break;
        default:
            alert("No existe el servicio seleccionado, vuelva a intentarlo!")

    }

}

function transferirDinero() {
    var montoTransferencia = prompt("Ingrese el monto que desea transferir");
    if (montoTransferencia > saldoCuenta) {
        alert("Usted no cuenta con dinero suficiente para transferir la cantidad ingresada.")
    }
    else {
        var numeroDeCuenta = prompt("Ingrese el numero de cuenta al que desea transferir dinero.")

        switch (numeroDeCuenta) {
            case "1234567":
                saldoCuenta = saldoCuenta - parseInt(montoTransferencia);
                actualizarSaldoEnPantalla();
                alert("Se han transferido:" + montoTransferencia + "\nCuenta destino:" + numeroDeCuenta)
                break

            case "7654321":
                saldoCuenta = saldoCuenta - parseInt(montoTransferencia);
                actualizarSaldoEnPantalla();
                alert("Se han transferido:" + montoTransferencia + "\nCuenta destino:" + numeroDeCuenta)
                break

            default:
                alert("Solo podes transferir dineroa  una cuenta amiga.")
        }
    }



}

function iniciarSesion() {
    var passwordInput = prompt("ingrese su password")
    if (passwordInput != password) {
        saldoCuenta = 0;
        alert("password incorrecto. su dinero a sido retenido por seguridad");
    }
    else {

        alert("Bienvenido a tu homebancking, ya puedes realizar operaciones!");
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}



function sumarACuenta(ingreso) {
    saldoCuenta = saldoCuenta + parseInt(ingreso);
}

function restarACuenta(ingreso) {
    saldoCuenta = saldoCuenta - parseInt(ingreso);
}