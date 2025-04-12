import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'API Proyecto Final - Users & Pets',
            description: 'Documentación de la API para los módulos de Usuarios y Mascotas',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:8080'
            }
        ],
        tags: [
            {
                name: 'Users',
                description: 'Operaciones relacionadas a usuarios'
            },
            {
                name: 'Pets',
                description: 'Operaciones relacionadas a mascotas'
            }
        ]
    },
    apis: ['./src/routes/*.js'], // Asegurate que la ruta apunte a donde están tus routers
};

const specs = swaggerJSDoc(swaggerOptions);

export { specs, swaggerUiExpress };
