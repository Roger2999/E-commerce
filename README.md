# E-Commerce React App

Este proyecto es una tienda online desarrollada con React y Vite. Permite explorar productos de hardware y tecnología, agregarlos a un carrito y simular una compra.

## Características principales

- Listado de productos con imágenes, categorías y marcas.
- Búsqueda y filtrado por nombre y categoría.
- Carrito de compras con suma, resta y eliminación de productos (utilizando useReducer dentro de un contexto global, esto usando Contex Api).
- Formulario de checkout simulado (utilizando React Hook Form).
- Diseño responsive y visual moderno usando Flexbox y Bootstrap.

## Estructura del proyecto

```
├── public/
├── src/
│   ├── components/         # Componentes reutilizables (Card, NavBar, etc.)
│   ├── context/            # Contextos de React para productos, carrito y búsqueda
│   ├── pages/              # Páginas principales (Productos, Carrito)
│   ├── styles/             # Archivos CSS
│   └── TiendaApp.jsx       # Componente principal
├── index.html
├── package.json
└── vite.config.js
```

## Instalación y uso

1. Clona el repositorio:
   ```sh
   git clone <url-del-repo>
   cd e-commerce
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Buenas prácticas aplicadas

- Componentes reutilizables y desacoplados.
- Context API para manejo global de estado.
- Código y estilos organizados por funcionalidad.

## Créditos

- Bootstrap para estilos base.
