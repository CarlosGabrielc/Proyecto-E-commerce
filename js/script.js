// En script.js
window.onload = function () {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    alert(`Bienvenido, ${storedUserData.user} a Toda Las Pilchas!`);
};

const productos = [
    //camperas
    {
        id: "campera-1",
        titulo: "Campera nevada TNF",
        imagen: "../imagenes-ropa-proyecto/camperas/campera-1.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 78999
    },
    {
        id: "campera-2",
        titulo: "Campera corderito TNF",
        imagen: "../imagenes-ropa-proyecto/camperas/campera-2.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 85999
    },
    {
        id: "campera-3",
        titulo: "Campera crema TNF",
        imagen: "../imagenes-ropa-proyecto/camperas/campera-3.jpeg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 78999
    },
    {
        id: "campera-4",
        titulo: "Buzo Nike",
        imagen: "../imagenes-ropa-proyecto/camperas/campera-4.webp",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 55000
    },
    {
        id: "campera-5",
        titulo: "Buzo Adidas",
        imagen: "../imagenes-ropa-proyecto/camperas/campera-5.webp",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 52000
    },
    {
        id: "campera-6",
        titulo: "Rompevientos nike",
        imagen: "../imagenes-ropa-proyecto/camperas/campera-6.png",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 45500
    },
    {
        id: "campera-7",
        titulo: "Rompevientos nike negra",
        imagen: "../imagenes-ropa-proyecto/camperas/campera-7.jpg",
        categoria: {
            nombre: "Camperas",
            id: "camperas"
        },
        precio: 59999
    },
    //JEANS
    {
        id: "jean-1",
        titulo: "Jean cargo de mujer",
        imagen: "../imagenes-ropa-proyecto/jeans/jean-cargo-1.jfif",
        categoria: {
            nombre: "Jeans",
            id: "jeans"
        },
        precio: 32500
    },
    {
        id: "jean-2",
        titulo: "Jean cargo de mujer negro",
        imagen: "../imagenes-ropa-proyecto/jeans/jean-cargo-2.jpg",
        categoria: {
            nombre: "Jeans",
            id: "jeans"
        },
        precio: 34000
    },
    {
        id: "jean-3",
        titulo: "Jean cargo mom de mujer Negro ",
        imagen: "../imagenes-ropa-proyecto/jeans/jean-cargo-3.jpg",
        categoria: {
            nombre: "Jeans",
            id: "jeans"
        },
        precio: 33999
    },
    {
        id: "jean-4",
        titulo: "Jean cargo mom de hombre Negro",
        imagen: "../imagenes-ropa-proyecto/jeans/jean-cargoH-1.jpg",
        categoria: {
            nombre: "Jeans",
            id: "jeans"
        },
        precio: 32900
    },
    {
        id: "jean-5",
        titulo: "Jean cargo mom de hombre Negro con hilos ",
        imagen: "../imagenes-ropa-proyecto/jeans/jean-cargoH-2.jpg",
        categoria: {
            nombre: "Jeans",
            id: "jeans"
        },
        precio: 33999
    },
    {
        id: "jean-6",
        titulo: "Jean cago de hombre Verde",
        imagen: "../imagenes-ropa-proyecto/jeans/jean-cargoH-3.jpg",
        categoria: {
            nombre: "Jeans",
            id: "jeans"
        },
        precio: 30000
    },

    //REMERAS
    {
        id: "remera-1",
        titulo: "Remera oversize 444 Rosa",
        imagen: "../imagenes-ropa-proyecto/remerasOversize/remera-overH-1.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 14000
    },
    {
        id: "remera-2",
        titulo: "Remera oversize 444 Verde",
        imagen: "../imagenes-ropa-proyecto/remerasOversize/remera-overH-2.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 14000
    },
    {
        id: "remera-3",
        titulo: "Remera oversize 999 Verde",
        imagen: "../imagenes-ropa-proyecto/remerasOversize/remera-overH-3.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 14000
    },
    {
        id: "remera-4",
        titulo: "Remera oversize Negro",
        imagen: "../imagenes-ropa-proyecto/remerasOversize/remera-overH-4.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 12000
    },

    {
        id: "remera-5",
        titulo: "Remera oversize kritical Negro",
        imagen: "../imagenes-ropa-proyecto/remerasOversize/remera-overH-5.jpg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 13000
    },
    {
        id: "remera-6",
        titulo: "Remera oversize japan Blanco",
        imagen: "../imagenes-ropa-proyecto/remerasOversize/remera-overM-6.jpeg",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 15000
    },
    //Zapatillas

    {
        id: "zapatilla-1",
        titulo: "Zapatillas nike AirMax Negro",
        imagen: "../imagenes-ropa-proyecto/zapatillas/zapatillas-1.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 125000
    },
    {
        id: "zapatilla-2",
        titulo: "Zapatillas nike AirMax 97",
        imagen: "../imagenes-ropa-proyecto/zapatillas/zapatillas-2.jpg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 200000
    },
    {
        id: "zapatilla-3",
        titulo: "Zapatillas adidas Campus negro",
        imagen: "../imagenes-ropa-proyecto/zapatillas/zapatillas-3.jpeg",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 119999
    },
    {
        id: "zapatilla-4",
        titulo: "Zapatillas adidas All Stars Blancas ",
        imagen: "../imagenes-ropa-proyecto/zapatillas/zapatillas-4.jfif",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatillas"
        },
        precio: 99999
    }
];


const contedorProductos = document.querySelector("#contendor-productos");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt=""${producto.titulo}>
            <div class="producto-detalles">
            <h3 class="titulo-producto">${producto.titulo}</h3> 
            <p class="precio-producto">$${producto.precio}</p>
            <button class="agregar-producto" id="${producto.id}">Agregar al carrito</button>
            </div>
        `
            })
            contenedorProductos.append(div)
}

/* <div class="productos">
                <img class="producto-imagen" src="../imagenes-ropa-proyecto/camperas/campera-1.jpg" alt="">
                <div class="producto-detalles">
                    <h3 class="titulo-producto">Campera nevada TNF</h3>
                    <p class="precio-producto">$78999</p>
                    <button class="agregar-producto">Agregar al carrito</button>
                </div>
            </div> */