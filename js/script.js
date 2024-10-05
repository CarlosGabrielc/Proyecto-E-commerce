/* Mi pagina es un ecomerce de venta de ropa, quiero que cuando el usuario ingrese se le de una bienvenida con su nombre y que cuando seleccione un articulo ese articulo valla al carrito de compras, luego si quiere realizar la compra el usuario decida como quiere pagar si con tarjeta debito,credito o efectivo etc. */



/* Como primer entrega solo voy a poner el precio de 3 remeras 4 jeans y 3 buzos para simular la compra */
let menuPrincipal;
let compraTotal = 0;
let nombreUsuario = "";


//Entro y pido el nombre del usuario
function pedirNombre() {
    nombreUsuario = prompt("Bienvenido a todaLasPilchasOk, Por favor, ingrese su nombre");
}
//Luego de pedir el nombre darle la bienvenida le muestro el menu, intento hacer el menu con una funcion para ejemplificar codigo

//Funcion muestro el menu pricipal
function verMenuPrincipal() {
    menuPrincipal = prompt("Hola " + nombreUsuario + " ,Bienvenido a nuestro menu" + "\n" +
        "1) Para navegar por la pagina." + "\n" +
        "2) Para comprar " + "\n" +
        "3) Total de la compra" + "\n" +
        "4) Para salir");
    return menuPrincipal;
}
//Luego de mostrar el menu si el usuario pide comprar le muestro un pequeño catalogo de ropa
//Funcion mostrar catalogo
function mostrarCatalogo() {
    return parseInt(prompt("Aquí te dejamos nuestro catálogo seleccione lo que desea comprar: " + "\n" +
        "Remeras" + "\n" +
        "1) Remera Oversize rosa = $14.000" + "\n" +
        "2) Remera Overrsize verde agua = $14.000" + "\n" +
        "3) Remera Oversize verde = $14.000" +
        "Jeans" + "\n" +
        "4) Jean cargo hombre = $32.900" + "\n" +
        "5) Jean cargo mom mujer = $33.999" + "\n" +
        "Zapatillas" + "\n" +
        "6) Nike AirMax negras = $125.000" + "\n" +
        "7) Nike AirMax 97 negras-reflex = $200.000" + "\n" +
        "8) Adidas campus verdes = $138.000"));
}

//funcion para sumar compras
function sumaCompras(opcionCompra) {
    switch (opcionCompra) {
        case 1:
        case 2:
        case 3:
            compraTotal += 14000;
            break;
        case 4:
            compraTotal += 32900;
            break;
        case 5:
            compraTotal += 33999;
            break;
        case 6:
            compraTotal += 125000;
            break;
        case 7:
            compraTotal += 200000;
            break;
        case 8:
            compraTotal += 138000;
            break;
        default:
            break;
    }

    console.log("Compra actualizazda: $"+compraTotal);
    
}
//funcion para manejar las compras
function manejoDeCompras() {
    let seguir = true;
    while (seguir) {
        let opcionCompra = parseInt(mostrarCatalogo());

        //valido el dato ingresado        
        if (isNaN(opcionCompra) || opcionCompra < 1 || opcionCompra > 8) {
            alert("Por favor, ingrese un número válido entre 1 y 8");
            continue;
        }

        sumaCompras(opcionCompra);

        let salir = prompt("¿Desea comprar algo más? (SI o NO)").toUpperCase();
        if (salir === "NO") {
            seguir = false;
        }

    }
}
//bucle principal
pedirNombre();
do {
    verMenuPrincipal();
    switch (menuPrincipal) {
        case "1":
            alert(nombreUsuario + " aqui tienes la paagina de todaLasPilchasOK para que puedas verla y navegar por sus difetentes pestañas, si quieres volver a interactuar solo recarga la pagina ");
            break;
        case "2":
            manejoDeCompras();
            break;
        case "3":
            alert("Su compra es de: $" + compraTotal);
            console.log("mostrar el total: $"+compraTotal);
            
            break;

        case "4":
            alert("Hasta luego " + nombreUsuario + " !");
            break;
        default:
            alert("Ingrese un numero entre 1 y 4, la opcion que ingreso es invalida");
    }
} while (menuPrincipal !== "4");
