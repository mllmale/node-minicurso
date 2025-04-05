import User from '../models/user.js';

export const salvarUsuario = async (dados) => {
    return await User.create(dados);
};

export const buscarTodos = async () => {
    return await User.find();
};

export const buscarPorCpf = async (cpf) => {
    return await User.findOne({ cpf });
};

export const deletarPorCpf = async (cpf) => {
    return await User.deleteOne({ cpf });
};
