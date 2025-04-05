import express from 'express';
import {
    cadastrarUsuario,
    listarUsuarios,
    buscarUsuarioPorCpf,
    deletarUsuario
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', cadastrarUsuario);
router.get('/', listarUsuarios);
router.get('/cpf/:cpf', buscarUsuarioPorCpf);
router.delete('/cpf/:cpf', deletarUsuario);

export default router;
