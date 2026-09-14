let loadMoreBtn = document.querySelector("#load-more");
let currenItem = 4;

const productos = [
    {
        id: 1,
        nombre: "Tacos al pastor",
        descripcion: "Carne marinada con piña y especias.",
        precio: 18000,
        imagen: "https://plus.unsplash.com/premium_photo-1681406995086-e60e5c306e6c?q=80&w=687&auto=format&fit=crop"
    },
    {
        id: 2,
        nombre: "Guacamole",
        descripcion: "Aguacate fresco con limón.",
        precio: 14000,
        imagen: "https://plus.unsplash.com/premium_photo-1681406689584-2f7612fa98a4?q=80&w=687&auto=format&fit=crop"
    },
    {
        id: 3,
        nombre: "Enchiladas",
        descripcion: "Tortillas rellenas con salsa tradicional mexicana.",
        precio: 50000,
        imagen: "https://images.pexels.com/photos/35081817/pexels-photo-35081817.jpeg"
    },
    {
        id: 4,
        nombre: "Pozole",
        descripcion: "Caldo típico con maíz.",
        precio: 35000,
        imagen: "https://images.pexels.com/photos/16235561/pexels-photo-16235561.jpeg"
    },
    {
        id: 5,
        nombre: "Quesadillas",
        descripcion: "Rellenas de queso fundido.",
        precio: 16000,
        imagen: "https://images.pexels.com/photos/32351725/pexels-photo-32351725.jpeg"
    },
    {
        id: 6,
        nombre: "Churros",
        descripcion: "Crujientes con nutella.",
        precio: 12000,
        imagen: "https://images.pexels.com/photos/37543728/pexels-photo-37543728.jpeg"
    },
    {
        id: 7,
        nombre: "Molletes",
        descripcion: "Pan con frijoles y queso gratinado.",
        precio: 20000,
        imagen: "https://images.pexels.com/photos/31822991/pexels-photo-31822991.jpeg"
    },
    {
        id: 8,
        nombre: "Desayuno Mexicano",
        descripcion: "Huevos, frijoles y tortillas en combo tradicional.",
        precio: 30000,
        imagen: "https://images.pexels.com/photos/28525191/pexels-photo-28525191.jpeg"
    },
    {
        id: 9,
        nombre: "Tacos Caseros",
        descripcion: "Tacos artesanales con ingredientes frescos.",
        precio: 15000,
        imagen: "https://images.pexels.com/photos/17429139/pexels-photo-17429139.jpeg"
    },
    {
        id: 10,
        nombre: "Fajitas de Pollo",
        descripcion: "Pollo a la parrilla con vegetales salteados.",
        precio: 20000,
        imagen: "https://images.pexels.com/photos/32371269/pexels-photo-32371269.jpeg"
    }
];

let carrito = [];
const listaProductos = document.getElementById("lista-1");
const carritoDOM = document.getElementById("carrito");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const totalCarrito = document.getElementById("total-carrito");
const carritoContenido = document.getElementById("carrito-contenido");
const tablaCarrito = document.getElementById("lista-carrito");

// Colores de la paleta para SweetAlert
const colores = {
    primarioOscuro: '#5C1D13',
    secundario: '#D96B27',
    acentoAmarillo: '#F2A922',
    fondoClaro: '#FDFBF7'
};

function mostrarProductos() {
    listaProductos.innerHTML = "";
    productos.forEach((producto, index) => {
        let claseOculta = index >= currenItem ? 'oculto' : 'mostrar';
        
        listaProductos.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center box ${claseOculta}">
                <div class="card shadow-sm h-100" style="width: 18rem;">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">${producto.nombre}</h5>
                        <p class="card-text text-muted small">${producto.descripcion}</p>
                        <p class="precio fw-bold text-danger mb-3">$${producto.precio.toLocaleString()}</p>
                        <a href="#" class="btn btn-warning fw-bold text-dark mt-auto agregar-carrito" data-id="${producto.id}">
                            Agregar al carrito
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}

mostrarProductos();

// Lógica del botón Cargar Más con clase CSS
if (loadMoreBtn) {
    loadMoreBtn.onclick = (e) => {
        e.preventDefault();
        let boxes = [...document.querySelectorAll(".box-container .box")];

        for (let i = currenItem; i < currenItem + 4 && i < boxes.length; i++) {
            boxes[i].classList.remove('oculto');
            boxes[i].classList.add('mostrar');
        }
        currenItem += 4;

        if (currenItem >= boxes.length) {
            loadMoreBtn.style.display = "none";
        }
    };
}

cargarEventListeners();

function cargarEventListeners() {
    listaProductos.addEventListener("click", comprarElemento);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const id = Number(e.target.dataset.id);
        const producto = productos.find(producto => producto.id === id);
        
        // Animación en el botón
        const btn = e.target;
        btn.textContent = '¡Agregado!';
        btn.classList.add('btn-success');
        btn.classList.remove('btn-warning');
        
        setTimeout(() => {
            btn.textContent = 'Agregar al carrito';
            btn.classList.remove('btn-success');
            btn.classList.add('btn-warning');
        }, 1500);

        carrito.push(producto);
        insertarCarrito();

        // SweetAlert de producto agregado
        Swal.fire({
            title: '¡Agregado!',
            text: `${producto.nombre} se agregó a tu pedido`,
            icon: 'success',
            iconColor: colores.acentoAmarillo,
            confirmButtonColor: colores.primarioOscuro,
            confirmButtonText: '¡Seguir pidiendo!',
            timer: 2000,
            timerProgressBar: true,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            background: colores.fondoClaro,
            color: colores.primarioOscuro
        });
    }
}

function insertarCarrito() {
    lista.innerHTML = "";
    
    if (carrito.length === 0) {
        carritoContenido.style.display = 'block';
        tablaCarrito.style.display = 'none';
        vaciarCarritoBtn.style.display = 'none';
    } else {
        carritoContenido.style.display = 'none';
        tablaCarrito.style.display = 'table';
        vaciarCarritoBtn.style.display = 'inline-block';
    }

    carrito.forEach((producto, index) => {
        const row = document.createElement("tr");
        row.classList.add('carrito-item-enter');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width="45" height="45" class="rounded" alt="${producto.nombre}">
            </td>
            <td class="fw-bold" style="font-size: 0.9rem;">${producto.nombre}</td>
            <td class="text-danger fw-bold">$${producto.precio.toLocaleString()}</td>
            <td>
                <a href="#" class="borrar text-danger text-decoration-none fw-bold" data-index="${index}" title="Eliminar">
                    ✕
                </a>
            </td>
        `;
        lista.appendChild(row);
    });
    
    // Agregar event listener a los botones de eliminar
    document.querySelectorAll('.borrar').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const index = Number(this.dataset.index);
            const producto = carrito[index];
            
            Swal.fire({
                title: '¿Eliminar producto?',
                text: `¿Deseas eliminar "${producto.nombre}" de tu pedido?`,
                icon: 'question',
                iconColor: colores.secundario,
                showCancelButton: true,
                confirmButtonColor: colores.primarioOscuro,
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
                background: colores.fondoClaro,
                color: colores.primarioOscuro,
                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    carrito.splice(index, 1);
                    insertarCarrito();
                    
                    Swal.fire({
                        title: '¡Eliminado!',
                        text: 'El producto fue removido de tu pedido',
                        icon: 'info',
                        iconColor: colores.acentoAmarillo,
                        confirmButtonColor: colores.primarioOscuro,
                        timer: 1500,
                        timerProgressBar: true,
                        background: colores.fondoClaro,
                        color: colores.primarioOscuro,
                        showClass: {
                            popup: 'animate__animated animate__fadeIn'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOut'
                        }
                    });
                }
            });
        });
    });

    calcularTotal();
}

function vaciarCarrito(e) {
    e.preventDefault();
    
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'No hay productos en tu pedido',
            icon: 'info',
            confirmButtonColor: colores.primarioOscuro,
            background: colores.fondoClaro,
            color: colores.primarioOscuro
        });
        return;
    }

    Swal.fire({
        title: '¿Vaciar carrito?',
        text: 'Se eliminarán todos los productos de tu pedido',
        icon: 'warning',
        iconColor: colores.secundario,
        showCancelButton: true,
        confirmButtonColor: colores.primarioOscuro,
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sí, vaciar todo',
        cancelButtonText: 'Cancelar',
        background: colores.fondoClaro,
        color: colores.primarioOscuro,
        showClass: {
            popup: 'animate__animated animate__fadeIn'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            insertarCarrito();
            
            Swal.fire({
                title: '¡Carrito vaciado!',
                text: 'Tu pedido fue reiniciado',
                icon: 'success',
                iconColor: colores.acentoAmarillo,
                confirmButtonColor: colores.primarioOscuro,
                timer: 1500,
                timerProgressBar: true,
                background: colores.fondoClaro,
                color: colores.primarioOscuro,
                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            });
        }
    });
}

function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
    totalCarrito.textContent = `$${total.toLocaleString()}`;
}

// Inicializar carrito vacío
insertarCarrito();
