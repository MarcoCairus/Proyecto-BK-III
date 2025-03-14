import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";
import { petsService, usersService } from "../services/index.js";


const configuracion = {
    mascota: {
        imagenPredeterminada: "/img/1671549990926-coderDog",
        posiblesEstados: [true, false]
    },
    persona: {
        claveComun: "coder123",
        roles: ["user", "admin"]
    }
};

export class MocksModule {

    static _crearObjetoMascota(idPropietario = null) {
        return {
            name: faker.animal.petName(),
            specie: faker.animal.type(),
            birthDate: faker.date.birthdate(),
            adopted: faker.helpers.arrayElement(configuracion.mascota.posiblesEstados),
            owner: idPropietario,
            image: configuracion.mascota.imagenPredeterminada
        };
    }

    static async _crearObjetoPersona() {
        const nombre = faker.person.firstName();
        const apellido = faker.person.lastName();

        return {
            first_name: nombre,
            last_name: apellido,
            password: await createHash(configuracion.persona.claveComun),
            email: faker.internet.email({ firstName: nombre, lastName: apellido }),
            role: faker.helpers.arrayElement(configuracion.persona.roles),
            pets: []
        };
    }


    static async generarMascotas(cantidad, idsPropietarios = []) {
        const coleccionMascotas = [];

        for (let i = 0; i < cantidad; i++) {

            const idPropietario = idsPropietarios.length > 0
                ? (Math.random() > 0.5 ? faker.helpers.arrayElement(idsPropietarios) : null)
                : null;

            coleccionMascotas.push(this._crearObjetoMascota(idPropietario));
        }

        return coleccionMascotas;
    }


    static async generarPersonas(cantidad) {
        const coleccionPersonas = [];

        for (let i = 0; i < cantidad; i++) {
            coleccionPersonas.push(await this._crearObjetoPersona());
        }

        return coleccionPersonas;
    }

    static async generarDatos(cantidadMascotas, cantidadUsuarios) {
        try {

            const personasGeneradas = await this.generarPersonas(cantidadUsuarios);
            const personasAlmacenadas = await usersService.crearVarios(personasGeneradas);

            const listaIds = personasAlmacenadas.map(p => p._id);


            const mascotasGeneradas = await this.generarMascotas(cantidadMascotas, listaIds);
            const mascotasAlmacenadas = await petsService.crearVarios(mascotasGeneradas);


            return {
                resumen: {
                    totalPersonas: personasAlmacenadas.length,
                    totalMascotas: mascotasAlmacenadas.length
                },
                datos: {
                    usuarios: personasAlmacenadas,
                    mascotas: mascotasAlmacenadas
                }
            };
        } catch (error) {
            console.error("Error generando datos:", error.message);
            throw error;
        }
    }
}
