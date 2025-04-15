import GenericRepository from "./GenericRepository.js";

export default class UserRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getUserByEmail = (email) =>{
        return this.getBy({email});
    }
    getUserById = (id) =>{
        return this.getBy({_id:id})
    }
    
    crearVarios = (coleccionUsuarios) => {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] Iniciando creación masiva de ${coleccionUsuarios.length} usuarios`);
        
        const emails = coleccionUsuarios.map(usuario => usuario.email);
        const emailsUnicos = new Set(emails);
        
        if (emails.length !== emailsUnicos.size) {
            console.warn("Advertencia: Se detectaron correos electrónicos duplicados en la colección");
        }
        
        return this.dao.saveMany(coleccionUsuarios)
            .then(resultado => {
                console.log(`Creación masiva completada: ${resultado.length} usuarios insertados`);
                return resultado;
            })
            .catch(error => {
                console.error("Error en creación masiva:", error.message);
                throw error;
            });
    }
}