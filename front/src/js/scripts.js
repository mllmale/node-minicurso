import { sendData, findAll, findByCpf, deleteByCpf } from "./main.js";

async function enviarDado() {
    const cpfElement = document.getElementById('cpf');
    const nomeElement = document.getElementById('nome');
    const emailElement = document.getElementById('email');
    const sexoElement = document.getElementById('sexo');
    const cepElement = document.getElementById('cep');
    const ruaElement = document.getElementById('rua');
    const estadoElement = document.getElementById('estado');
    const cidadeElement = document.getElementById('cidade');
    
    if (!cpfElement || !nomeElement || !emailElement || !sexoElement || !cepElement || !ruaElement || !estadoElement || !cidadeElement) {
        console.error('Elementos do formulário não encontrados');
        return;
    }

    const cpf = cpfElement.value;
    const nome = nomeElement.value;
    const email = emailElement.value;
    const sexo = sexoElement.value;
    const cep = cepElement.value;
    const rua = ruaElement.value;
    const estado = estadoElement.value;
    const cidade = cidadeElement.value;
    console.log(sexo)

    const dados = { cpf, nome, email, sexo, cep, rua, cidade, estado };
    console.log(dados);

    document.getElementById('cpf').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('sexo').value = "";
    document.getElementById('cep').value = "";
    document.getElementById('rua').value = "";
    document.getElementById('estado').value = "";
    document.getElementById('cidade').value = "";

    try {
        const { url, options } = sendData(dados);
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const respostaJson = await response.json();
        console.log('Dados enviados com sucesso:', respostaJson);
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn-submit');
    if (button) {
        button.addEventListener('click', enviarDado);
    } else {
        console.error('Botão não encontrado');
    }
});

async function carregarUsuarios() {
    try {
        const { url, options } = findAll();
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        
        const usuarios = await response.json();
        exibirUsuarios(usuarios);
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
        mostrarMensagemErro('Não foi possível carregar a lista de usuários.');
    }
}

// Função para buscar usuário por CPF
async function buscarPorCPF(cpf) {
    try {
        const { url, options } = findByCpf(cpf);
        const response = await fetch(url, options);
        
        if (response.status === 404) {
            mostrarMensagemErro('Usuário não encontrado com este CPF.');
            return;
        }
        
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        
        const usuario = await response.json();
        exibirUsuarios([usuario]); // Exibe apenas o usuário encontrado
    } catch (error) {
        console.error('Erro ao buscar usuário por CPF:', error);
        mostrarMensagemErro('Erro ao buscar usuário. Verifique o CPF informado.');
    }
}

function exibirUsuarios(usuarios) {
    const tbody = document.querySelector('#data-table tbody');
    tbody.innerHTML = ''; // Limpa a tabela antes de inserir novos dados
    
    if (usuarios.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="9" class="no-data">Nenhum usuário encontrado</td>';
        tbody.appendChild(tr);
        return;
    }
    
    usuarios.forEach(usuario => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.cpf || '-'}</td>
            <td>${usuario.nome || '-'}</td>
            <td>${usuario.email || '-'}</td>
            <td>${usuario.sexo || '-'}</td>
            <td>${usuario.cep || '-'}</td>
            <td>${usuario.rua || '-'}</td>
            <td>${usuario.cidade || '-'}</td>
            <td>${usuario.estado || '-'}</td>
            <td>
                <button class="btn-apagar" data-cpf="${usuario.cpf}">Apagar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Adiciona evento de clique para todos os botões de apagar
    document.querySelectorAll('.btn-apagar').forEach(button => {
        button.addEventListener('click', apagarUsuario);
    });
}

async function apagarUsuario(event) {
    const button = event.target; 
    const cpf = button.getAttribute('data-cpf');

    if (!cpf) {
        console.error('CPF não encontrado para exclusão');
        return;
    }
console.log(cpf)
    try {
        const { url, options } = deleteByCpf(cpf); 
        const response = await fetch(url, options);

        console.log(`Usuário com CPF ${cpf} apagado.`);
        carregarUsuarios(); // Recarrega a lista após a exclusão
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
    }
}

function mostrarMensagemErro(mensagem) {
    const tbody = document.querySelector('#data-table tbody');
    tbody.innerHTML = `<tr><td colspan="8" class="error-message">${mensagem}</td></tr>`;
}

document.addEventListener('DOMContentLoaded', () => {
    carregarUsuarios();
    
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
        const cpfInput = document.getElementById('cpf-search');
        const cpf = cpfInput.value.trim();
        
        if (cpf) {
            buscarPorCPF(cpf);
        } else {
            carregarUsuarios(); 
        }
    });
    
    const cpfInput = document.getElementById('cpf-search');
    cpfInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const cpf = cpfInput.value.trim();
            if (cpf) {
                buscarPorCPF(cpf);
            } else {
                carregarUsuarios();
            }
        }
    });
});

function formataCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove tudo que não for número
    cpf = cpf.replace(/^(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    cpf = cpf.replace(/\.(\d{3})(\d)/, ".$1-$2");
    return cpf;
}

function formataCEP(cep) {
    cep = cep.replace(/\D/g, ""); // Remove tudo que não for número
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
    return cep;
}

function formataInput(event, tipo) {
    let valor = event.target.value;

    if (tipo === "cpf") {
        event.target.value = formataCPF(valor);
    } else if (tipo === "cep") {
        event.target.value = formataCEP(valor);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cpf").addEventListener("input", function(event) {
        formataInput(event, "cpf");
    });

    document.getElementById("cpf-search").addEventListener("input", function(event) {
        formataInput(event, "cpf");
    });

    document.getElementById("cep").addEventListener("input", function(event) {
        formataInput(event, "cep");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cepInput = document.getElementById("cep");
    const estadoInput = document.getElementById("estado");
    const cidadeInput = document.getElementById("cidade");
    const ruaInput = document.getElementById("rua");

    cepInput.addEventListener("input", async () => {
        let cep = cepInput.value

        if (cep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();

                if (!data.erro) {
                    estadoInput.value = data.uf;
                    cidadeInput.value = data.localidade;
                    ruaInput.value = data.logradouro;
                } 
            } catch (error) {
                console.error("Erro ao buscar o CEP:", error);
            }
        } 
    });
});