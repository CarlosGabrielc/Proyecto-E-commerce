// const productosEnCarrito = JSON.parse(localStorage.getItem("producto-en-carrito"));

// const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
// const contenedorCarritoProductos = document.querySelector("#carrito-productos");
// const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
// const contedorCarritoComprado = document.querySelector("#carrito-comprado");



// if (productosEnCarrito) {

//     contenedorCarritoVacio.classList.add("disable");
//     contenedorCarritoProductos.classList.remove("disable");
//     contenedorCarritoAcciones.classList.remove("disable");
//     contedorCarritoComprado.classList.add("disable");


//     contenedorCarritoProductos.innerHTML = "";



//     productosEnCarrito.forEach(producto => {
//         const div = document.createElement("div");
//         div.classList.add("carrito-producto");
//         div.innerHTML = ` 
// <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
//                     <div class="carrito-nombre">
//                     <small>Titulo</small>
//                         <h3>${producto.titulo}</h3>
//                     </div>
//                     <div class="carrito-cantidad">
//                         <small>Cantidad</small>
//                         <p>${producto.cantidad}</p>
//                     </div>
//                     <div class="carrito-precio">
//                         <small>Precio</small>
//                         <p>${producto.precio}</p>
//                     </div>
//                     <div class="carrito-subtotal">
//                         <small>Subtotal</small>
//                         <p>${producto.precio * producto.cantidad}</p>
//                     </div>
//                     <button class="carrito-eliminar" id="${producto.id}" ><i class="bi bi-trash3-fill"></i></button>
// `;

//         contenedorCarritoProductos.append(div);
//     })

// } else {

// }

document.addEventListener('DOMContentLoaded', () => {
    const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
    const comprarAhoraBtn = document.querySelector(".accion-comprar");
    const contenedorCarritoProductos = document.querySelector("#contendorCarritoProductos");
    const totalCarrito = document.querySelector("#Total");
    const carritoVacio = document.querySelector("#carrito-vacio");
    const carritoComprado = document.querySelector("#carrito-comprado");

    let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

    function cargarCarrito() {
        contenedorCarritoProductos.innerHTML = "";
        if (productosEnCarrito.length === 0) {
            carritoVacio.classList.remove("disable");
            contenedorCarritoProductos.classList.add("disable");
        } else {
            carritoVacio.classList.add("disable");
            contenedorCarritoProductos.classList.remove("disable");

            productosEnCarrito.forEach(producto => {
                const div = document.createElement("div");
                div.classList.add("producto-carrito");
                div.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-carrito-imagen">
                    <div class="producto-carrito-detalles">
                        <p class="producto-carrito-titulo">${producto.titulo}</p>
                        <p class="producto-carrito-precio">$${producto.precio}</p>
                        <p class="producto-carrito-cantidad">Cantidad: ${producto.cantidad}</p>
                        <button class="eliminar-producto" data-id="${producto.id}">Eliminar</button>
                    </div>
                `;
                contenedorCarritoProductos.appendChild(div);
            });
        }
        actualizarTotal();
    }

    function eliminarProducto(id) {
        productosEnCarrito = productosEnCarrito.filter(producto => producto.id !== id);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        cargarCarrito();
    }

    function actualizarTotal() {
        const total = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
        totalCarrito.innerText = `$${total}`;
    }

    vaciarCarritoBtn.addEventListener("click", () => {
        productosEnCarrito = [];
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        cargarCarrito();
    });

    comprarAhoraBtn.addEventListener("click", () => {
        carritoComprado.classList.remove("disable");
        setTimeout(() => {
            carritoComprado.classList.add("disable");
            productosEnCarrito = [];
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarCarrito();
        }, 3000);
    });

    contenedorCarritoProductos.addEventListener("click", (e) => {
        if (e.target.classList.contains("eliminar-producto")) {
            const id = e.target.getAttribute("data-id");
            eliminarProducto(id);
        }
    });

    cargarCarrito();
});
