# Imagen base de Node
FROM node:18

# Crear directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto al contenedor
COPY . .

# Exponer el puerto (cambia si usás otro)
EXPOSE 8080

# Comando para iniciar la app
CMD ["node", "server.js"]





