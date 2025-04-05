import Joi from 'joi';

export const userValidationSchema = Joi.object({
    nome: Joi.string().required().messages({
        'string.empty': 'O nome é obrigatório'
    }),
    cpf: Joi.string().pattern(/^(\d{3}\.){2}\d{3}-\d{2}$/).required().messages({
        'string.pattern.base': 'CPF inválido'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Email inválido',
        'string.empty': 'O email é obrigatório'
    }),
    cep: Joi.string().optional(),
    rua: Joi.string().optional(),
    cidade: Joi.string().optional(),
    estado: Joi.string().optional(),
    sexo: Joi.string().optional(),
});
