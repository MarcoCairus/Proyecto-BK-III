import { MocksModule } from "../module/mocks.module.js";
import __dirname from "../utils/index.js";

const controladorMocks = {
    
    _manejarError(res, error) {
        console.error("Error en controlador:", error);
        return res.status(500).json({
            estado: "error",
            mensaje: error.message || "Error interno del servidor"
        });
    },


    async generarMascotas(req, res) {
        try {
        
            const cantidad = req.query.cantidad ? parseInt(req.query.cantidad) : 50;

        
            if (isNaN(cantidad)) {
                return res.status(400).json({
                    estado: "error",
                    mensaje: "La cantidad debe ser un número válido"
                });
            }


            const animalesGenerados = await MocksModule.generarMascotas(cantidad);


            return res.status(200).json({
                estado: "ok",
                datos: animalesGenerados,
                total: animalesGenerados.length
            });
        } catch (error) {
            return controladorMocks._manejarError(res, error);
        }
    },


    async generarUsuarios(req, res) {
        try {

            const cantidad = req.query.cantidad ? parseInt(req.query.cantidad) : 50;


            if (isNaN(cantidad)) {
                return res.status(400).json({
                    estado: "error",
                    mensaje: "La cantidad debe ser un número válido"
                });
            }


            const personasGeneradas = await MocksModule.generarPersonas(cantidad);


            return res.status(200).json({
                estado: "ok",
                datos: personasGeneradas,
                total: personasGeneradas.length
            });
        } catch (error) {
            return controladorMocks._manejarError(res, error);
        }
    },


    async generarDatos(req, res) {
        try {
            const { pets, users } = req.body;

            if (!pets || !users) {
                return res.status(400).json({
                    estado: "error",
                    mensaje: "Debe enviar los parámetros 'pets' y 'users'"
                });
            }

            const cantidadMascotas = parseInt(pets);
            const cantidadUsuarios = parseInt(users);

            if (isNaN(cantidadMascotas) || isNaN(cantidadUsuarios)) {
                return res.status(400).json({
                    estado: "error",
                    mensaje: "Los parámetros 'pets' y 'users' deben ser números válidos"
                });
            }


            const datosGenerados = await MocksModule.generarDatos(cantidadMascotas, cantidadUsuarios);


            return res.status(200).json({
                estado: "ok",
                datos: datosGenerados
            });
        } catch (error) {
            return controladorMocks._manejarError(res, error);
        }
    }
};

export default controladorMocks;
