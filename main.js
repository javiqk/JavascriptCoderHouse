let ingresarNumero = parseInt (prompt("Ingrese un número"));

for (let i = 1; i<= 10; i ++) {
    let resultado = ingresarNumero + i;
    console.log (ingresarNumero + "+" + i + "=" + resultado)
}

let ingresarNombreUniversidad = prompt ("Ingrese su universidad");

    while (ingresarNombreUniversidad != "ESC") {
        console.log ("Su universidad es " + ingresarNombreUniversidad)
        ingresarNombreUniversidad = prompt ("Ingrese otro nombre")
}

let entrada = prompt ("ingrese su nombre");
    while (entrada != "ESC") {

        switch (entrada) {
            case "Eliana":
                alert ("Bienvenida Eliana");
                break;
            case "Ernesto":
                alert ("Bienvenido Ernesto");
                break;
            case "Esteban":
                alert ("Bienvenido Esteban");
                break;
            default:
                alert ("¿Quién sos?");
                break;
    }

    entrada = prompt ("ingrese su nombre nuevamente");
}
