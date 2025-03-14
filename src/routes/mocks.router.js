import { Router } from "express";
import controladorMocks from "../controllers/mocks.controller.js";

const routerSimulaciones = Router();


routerSimulaciones.get(
    "/mockingpets",
    controladorMocks.generarMascotas
);


routerSimulaciones.get(
    "/mockingusers",
    controladorMocks.generarUsuarios
);


routerSimulaciones.post(
    "/generateData",
    controladorMocks.generarDatos
);

export default routerSimulaciones;
