import {
    salvarUsuario,
    buscarTodos,
    buscarPorCpf,
    deletarPorCpf
} from '../services/userService.js';

import { userValidationSchema } from '../dtos/userDto.js';

export const cadastrarUsuario = async (req, res) => {
    try {
        const { error } = userValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ erro: error.details[0].message });

        const novo = await salvarUsuario(req.body);
        res.status(201).json(novo);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

export const listarUsuarios = async (req, res) => {
    const lista = await buscarTodos();
    res.json(lista);
};

export const buscarUsuarioPorCpf = async (req, res) => {
    const { cpf } = req.params;
    const usuario = await buscarPorCpf(cpf);
    if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });
    res.json(usuario);
};

export const deletarUsuario = async (req, res) => {
    const { cpf } = req.params;
    await deletarPorCpf(cpf);
    res.status(204).send();
};
