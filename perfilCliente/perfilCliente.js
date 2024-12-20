const vendedores = [
    {
        nome: "João Silva",
        cidade: "São Paulo",
        estado: "SP",
        telefone: "(11) 99999-9999",
        foto: "../fotos/usuarioImage.png"
    },
    {
        nome: "Maria Oliveira",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        telefone: "(21) 88888-8888",
        foto: "../fotos/usuarioImage.png"
    },
    {
        nome: "Carlos Pereira",
        cidade: "Belo Horizonte",
        estado: "MG",
        telefone: "(31) 77777-7777",
        foto: "../fotos/gustavoImage.jpg"
    }
];

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const vendedorNome = decodeURIComponent(params.get('vendedor'));

    const vendedor = vendedores.find(v => v.nome === vendedorNome);

    if (vendedor) {
        const container = document.querySelector('.perfil-container');
        container.innerHTML = `
            <div class="perfil-info">
                <img src="${vendedor.foto}" alt="${vendedor.nome}" class="perfil-foto">
                <h1>${vendedor.nome}</h1>
                <p>Cidade: ${vendedor.cidade}</p>
                <p>Estado: ${vendedor.estado}</p>
                <p>Telefone: ${vendedor.telefone}</p>
                <button id="enviarMensagem">Enviar Mensagem</button>
            </div>
        `;
    } else {
        document.querySelector('.perfil-container').innerHTML = '<p>Vendedor não encontrado.</p>';
    }
};
