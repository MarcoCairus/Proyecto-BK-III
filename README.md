# Proyecto Final Backend - Adopciones API

Este es el proyecto final del curso de Backend, desarrollado en Node.js con Express y MongoDB.  
Consiste en una API REST para gestionar usuarios, mascotas y procesos de adopción.

El proyecto incluye:
- Documentación con Swagger (`/api/docs`)
- Tests funcionales con Mocha y Supertest
- Dockerización completa del servidor
- Subida de imagen a DockerHub

---

## Cómo correr el proyecto con Docker

### 1. Cloná el repositorio (si corresponde)

```bash
git clone https://github.com/tuusuario/proyecto-final.git
cd proyecto-final
```

### 2. Corré la imagen desde DockerHub

Asegurate de tener Docker instalado y ejecutando.

```bash
docker pull marcocairus/proyecto-final
```

```bash
docker run -p 8080:8080 --env-file .env marcocairus/proyecto-final
```

> Asegurate de tener un archivo `.env` válido en la raíz del proyecto con tus variables de entorno (como `MONGO`, `PORT`, etc.)

---

## Documentación de la API

Una vez que esté corriendo el contenedor, accedé a:

```
http://localhost:8080/api/docs
```

Ahí vas a ver la documentación Swagger del módulo de **usuarios** (`/api/users`).

---

## Imagen en DockerHub

La imagen pública está disponible en:

🔗 [https://hub.docker.com/r/marcocairus/proyecto-final](https://hub.docker.com/r/marcocairus/proyecto-final)

---

## Tests

Los tests funcionales fueron implementados para los endpoints de adopciones (`/api/adoptions`) y se ejecutan con:

```bash
npm test
```

> Asegurate de tener la base de datos activa y variables de entorno cargadas correctamente antes de testear.

---

## Tecnologías usadas

- Node.js
- Express
- MongoDB + Mongoose
- Docker
- Swagger (OpenAPI)
- Mocha + Supertest

---

## Autor

Marco Cairus - Proyecto Final Curso Backend Coderhouse
