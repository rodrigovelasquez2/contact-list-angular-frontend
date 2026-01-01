<!--- README.md generado — Reemplaza los placeholders (nombre, URLs, versiones) según tu proyecto -->

<p align="center">
  <h1>Contact List Web</h1>
  <p>Aplicación CRUD para gestionar contactos (Frontend en Angular + Backend en Java Spring Boot)</p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="build" />
    <img src="https://img.shields.io/badge/Angular-15-red" alt="angular" />
    <img src="https://img.shields.io/badge/Java-11-blue" alt="java" />
    <img src="https://img.shields.io/badge/Spring%20Boot-2.x-green" alt="spring" />
  </p>
</p>

---

**Sobre el proyecto**

🚀 Contact List Web es una aplicación sencilla que expone un frontend en Angular para gestionar contactos (crear, listar, editar, eliminar) y consume una API REST construida en Java Spring Boot. Está pensada tanto para aprendizaje como para un caso de uso real de sincronización de contactos en una API central.

Por qué existe: resuelve la necesidad de equipos pequeños de mantener un registro centralizado de contactos con operaciones CRUD y un UI ligero.

---

**Arquitectura y Estructura de Carpetas (clave)**

Árbol de carpetas principal (solo archivos clave del frontend incluidos en este repo):

```
src/
├── index.html
├── main.ts
├── styles.css
└── app/
    ├── app.ts
    ├── app.routes.ts
    ├── app.html
    ├── contact-form-component/
    │   ├── contact-form.ts         # lógica del formulario (crear/editar)
    │   ├── contact-form.html       # template del formulario
    │   └── contact-form.css
    ├── contact-list-component/
    │   ├── contact-list-component.ts  # lógica para listar y eliminar
    │   ├── contact-list-component.html
    │   └── contact-list-component.css
    ├── model/
    │   └── contact.interface.ts
    └── services/
        └── contact-services.ts     # servicio HTTP hacia /api/contacts
```

Descripción rápida:
- `model`: contiene contratos/DTOs (ej. `Contact`).
- `services`: capa de comunicación HTTP (contenedor de llamadas a la API).
- `contact-form-component`: manejar creación/edición con validaciones.
- `contact-list-component`: listar, trackBy (asegurar ids únicos), eliminar.

Ejemplo de estructura típica de backend (sugerida):

```
backend/
├── src/main/java/com/example/
│   ├── controller/    # endpoints REST
│   ├── service/       # lógica de negocio
│   ├── persistence/   # repositorios / mappers
│   └── domain/        # entidades
└── src/main/resources/application.properties
```

---

**Stack tecnológico**

- 🟣 Angular (Frontend)
- ☕ Java + Spring Boot (Backend)
- 🧾 JSON over HTTP (REST)
- 🗄️ MySQL / PostgreSQL (configurable)
- 🎨 Bootstrap (opcional)

---

**Pre-requisitos**

- Node.js >= 16 y npm
- (Opcional) Angular CLI: `npm i -g @angular/cli`
- JDK 11+
- Maven o Gradle
- Cliente DB (DBeaver, pgAdmin, etc.)

---

**Instalación y Despliegue (Paso a Paso)**

1) Clona el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd contactListWeb
```

2) Frontend — instalar dependencias y ejecutar

```bash
npm install
ng serve --open
```

3) Backend — configurar base de datos y propiedades

Ejemplo `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/contactdb
spring.datasource.username=dbuser
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=update
server.port=8080
```

4) SQL: script mínimo para `contacts`

```sql
CREATE TABLE contacts (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Ejecuta los scripts en el orden: esquema -> datos.

5) Levantar backend

```bash
# con Maven
mvn spring-boot:run

# o empaquetar y ejecutar
mvn clean package
java -jar target/your-backend.jar
```

6) Verificar endpoints

Abre `http://localhost:8080/api/contacts` y valida que retorne JSON.

---

**Uso rápido**

- Abrir `http://localhost:4200`.
- Crear: botón **Nuevo contacto** → completar formulario → Guardar.
- Editar: botón **Editar** en la fila del contacto.
- Eliminar: botón **Eliminar** (confirma acción).

---
<!--
**Capturas de Pantalla / Demos**

Añade aquí tus imágenes:

![Lista de contactos](url_imagen)
![Formulario de contacto](url_imagen)
-->
---

**Problemas comunes y soluciones rápidas**

- HttpErrorResponse con `status: 200` pero `ok: false`: verifica `Content-Type: application/json` y que la respuesta sea JSON válido.
- Error NG0955 (trackBy keys duplicadas): asegúrate de que `contact.id` existe y es único; si no, usa `trackBy: index` temporalmente.

**Ejemplo SQL para ordenar NULLs (aprendizaje técnico)**

```sql
-- ordenar colocando NULLs al final
SELECT * FROM contacts
ORDER BY (created_at IS NULL), created_at DESC;
```

---

**Contribuciones**

1. Fork -> branch -> PR
2. Sigue las convenciones de estilo y pruebas (si aplican)

---

**Autor y Contacto**

- **Tu Nombre** — Reemplaza con tu nombre real
- Email: tu.email@example.com
- GitHub: https://github.com/tu-usuario

---
