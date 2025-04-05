import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String
    },
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    }
});

export default mongoose.model('User', userSchema)