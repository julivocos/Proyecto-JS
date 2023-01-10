
let contraseña = 5780;
let saldo = 50000;
let saldo_final;

function extraccion_dinero(monto) {

    if (monto == 0) {
        console.log("El monto ingresado debe ser mayor a 0");
    }


    else if (monto > saldo) {
        console.log("Saldo insuficiente");
        console.log("Su saldo actual en la cuenta es $", saldo);
    }


    else if (monto <= saldo) {
        saldo_final = saldo - monto;

        console.log("La operacion se ha realizado correctamente");
        console.log("Su saldo actual en la cuenta es $", saldo_final);
        saldo = saldo_final;
    }

}




console.log("BIENVENIDO AL CAJERO BANELCO");
let clave = (parseInt(prompt("Ingrese su clave numerica para poder operar")));
let intentos = 3;


function ingresoClave() {
    while (clave != contraseña && intentos > 0) {
        intentos--;
        if (intentos != 0) {
            console.log("Clave incorrecta !!! ");
            clave = (parseInt(prompt("Clave incorrecta, ingrese nuevamente")));
        }

    }
   

}
ingresoClave();


if (intentos == 0 && clave != 5780) {
    console.log("3 intentos incorrectos, se ha bloqueado su cuenta por seguridad");

}
else {
    console.log("Bienvenida JULIETA VOCOS");
    let op;
    let opcion;
    do {

        if (intentos > 0 && clave === 5780) {


            op = (prompt("Ingrese la opcion que desea operar:A Extraccion - B Transferencias - C Consulta de saldo - D Salir"));
            opcion = op.toUpperCase();

            switch (opcion) {
                case "A":
                    console.log("Seleccionó EXTRACCIÓN");
                    let extraccion = (prompt("Ingrese el monto a extraer"));
                    extraccion_dinero(extraccion);
                    console.log("-----------------------");
                    break;

                case "B":
                    console.log("Seleccionó TRANSFERENCIAS");
                    let monto = (prompt("Ingrese el monto a transferir"));
                    extraccion_dinero(monto);
                    console.log("-----------------------");
                    break;

                case "C":
                    console.log("Seleccionó CONSULTA DE SALDO");
                    console.log("Su saldo es ", saldo);
                    console.log("-----------------------");
                    break;

                default:
                    if (opcion != "D") {
                        console.log("Opción no Valida");
                    }


                    break;
            }


        }


    } while (opcion != "D");
    console.log("HA SALIDO DEL SISTEMA");


}



