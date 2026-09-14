# 🌮 La Fiesta - Cocina Mexicana

> Landing Page para restaurante de cocina mexicana fusionada con sabores colombianos.

---

## 📖 Acerca del Proyecto

Proyecto desarrollado por **Equipo Generation** como parte del Bootcamp de Programación.

📅 Hackatón – Julio 2026

Basado en el proyecto base [VannessaMatallana/Hackaton-Landingpage-Grupo9](https://github.com/VannessaMatallana/Hackaton-Landingpage-Grupo9), con mejoras significativas en diseño, funcionalidad y experiencia de usuario.

---

## ✅ Funcionalidades

### Landing Page
- **Hero Banner** a pantalla completa con imagen de fondo y texto animado
- **Sección "Nuestra Historia"** con modal interactivo que cuenta la historia de la familia Rodríguez-Patiño
- **Promociones del mes** con cards animadas (efecto flip 3D)
- **Menú de productos** con carga dinámica y paginación ("Cargar más")
- **Footer** con información de contacto y enlaces de navegación

### Carrito de Compras
- Agregar productos al carrito desde el menú
- **Control de cantidades** con botones +/- para sumar o restar productos
- Visualizar cantidad, precio unitario y subtotal por producto
- Eliminar productos individuales (con confirmación SweetAlert)
- Vaciar carrito completo (con confirmación SweetAlert)
- **Cálculo automático del total** (precio × cantidad)
- Diseño responsivo con scroll personalizado

### Mejoras Implementadas
- **Logo optimizado** con fondo blanco y sombra en navbar
- **Banner full screen** sin espacios blancos entre secciones
- **Botón "Cargar más"** funcional con animaciones de entrada
- **Estructura de carpetas** organizada (`CSS/`, `JS/`, `imagenes/`)
- **SweetAlert** para notificaciones de agregado/eliminado de productos
- **Promociones animadas** con efecto flip 3D y Scroll Animations
- **Paleta de colores** consistente (rojo oscuro, naranja quemado, dorado)
- **Carrito mejorado** con cantidades, subtotales y controles +/- responsivos

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura semántica |
| CSS3 | Custom Properties, Flexbox, Grid, Animaciones 3D |
| Bootstrap 5 | Layout responsivo, navbar, grid |
| JavaScript Vanilla | DOM manipulation, carrito, paginación |
| SweetAlert2 | Notificaciones y confirmaciones |

---

## 📁 Estructura del Proyecto

```
├── index.html
├── .gitignore
├── CSS/
│   ├── styles.css      # Estilos principales
│   ├── modal.css       # Estilos del modal "Nuestra Historia"
│   └── promos.css      # Estilos de la sección promociones
├── JS/
│   ├── script.js       # Lógica del carrito y productos
│   └── promos.js       # Animaciones de promociones
├── imagenes/
│   ├── comidamex.jpg
│   ├── comidamex.avif
│   ├── logo la fiesta.png
│   └── modalnuestrahistoria.avif
└── README.md
```

---

## 🔮 Próximas Funcionalidades

- **Backend** con Node.js/Express para gestión de productos y pedidos
- **Base de datos** para persistencia de datos del carrito y usuarios
- **Panel de administración** para gestionar menú y promociones
- **Sistema de reservaciones** para mesas
- **Integración con pasarela de pagos**

---

## 👩‍💻 Equipo

Proyecto desarrollado por **Equipo Generation** como parte del Bootcamp de Programación.

📅 Hackatón – Julio 2026

Basado en el proyecto base [VannessaMatallana/Hackaton-Landingpage-Grupo9](https://github.com/VannessaMatallana/Hackaton-Landingpage-Grupo9).
