const API_URL = 'http://localhost:3000/api/usuarios/';

export function sendData(dados) {
    return {
        url: API_URL,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        }
    };
}

export function findAll() {
    return {
        url: API_URL,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    };
}

export function deleteByCpf(cpf) {
    return {
        url: `${API_URL}/cpf/${cpf}`,
        options: {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    };
}

export function findByCpf(cpf) {
    return {
        url: `${API_URL}/cpf/${cpf}`, 
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    };
}