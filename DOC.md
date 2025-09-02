# Documentación
Contact List Web
Aplicación web desarrollada con Angular y Java (Spring Boot) para gestionar una lista de contactos. Permite crear, listar, editar y eliminar contactos mediante una interfaz sencilla y moderna.

Características
- Listado de contactos con tabla y acciones.
- Formulario para crear y editar contactos.
- Eliminación de contactos con confirmación.
- Consumo de API REST en Java (Spring Boot).
- Estilos modernos con Bootstrap.

# Estructura del Proyecto
```bash
src/
│
├── index.html                # Archivo principal HTML
├── main.ts                   # Punto de entrada de la app Angular
├── styles.css                # Estilos globales
│
└── app/
    ├── app.config.ts         # Configuración de la app
    ├── app.css               # Estilos generales de la app
    ├── app.html              # Template principal
    ├── app.routes.ts         # Rutas de la aplicación
    ├── app.spec.ts           # Pruebas unitarias
    ├── app.ts                # Componente raíz
    │
    ├── contact-form-component/
    │   ├── contact-form.css      # Estilos del formulario
    │   ├── contact-form.html     # Template del formulario
    │   └── contact-form.ts       # Lógica del formulario
    │
    ├── contact-list-component/
    │   ├── contact-list-component.css   # Estilos de la lista
    │   ├── contact-list-component.html  # Template de la lista
    │   └── contact-list-component.ts    # Lógica de la lista
    │
    ├── model/
    │   └── contact.interface.ts   # Interfaz Contact
    │
    └── services/
        └── contact-services.ts    # Servicio para consumir la API REST

```
