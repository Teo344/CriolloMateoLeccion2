# CriolloMateoLeccion2

Una aplicación web desarrollada en Angular 20+ que simula una tienda online con productos destacados, vista detallada por producto y un formulario de contacto. Utiliza Signals, componentes standalone y enrutamiento dinámico.


Tecnologías Usadas
Angular 20+

Standalone Components

Angular Signals

Routing Dinámico

HTML5 + CSS3

Bootstrap (opcional)

TypeScript


✅ Página de inicio con productos destacados

✅ Listado de productos cargados con signals

✅ Detalles de producto dinámicos (/productos/:id)

✅ Formulario de contacto

✅ Enrutamiento SPA con routerLink y router-outlet

✅ Estilo responsive y limpio


Los productos están definidos como una señal (signal) en productos/data.ts, lo que permite reactividad sin necesidad de servicios ni RxJS. Se accede con productos() directamente desde los templates.

productos/data.ts – Signal con lista de productos

productos.ts – Componente standalone para mostrar todos los productos

detalles.ts – Componente que obtiene el producto por id desde la ruta

contactos.ts – Formulario de contacto con validación

app.routes.ts – Configuración de rutas

Puedes modificar contactos.ts para conectar el formulario a un backend real o servicio de correo.






