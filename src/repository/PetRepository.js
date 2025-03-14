import GenericRepository from "./GenericRepository.js";

export default class PetRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }

    crearVarios = (docs) => {
        return this.dao.saveMany(docs);
    }
}