const produtos = [
    {
        id: 1,
        nome: "Arroz Integral",
        preco: 20.00,
        cidade: "São Paulo",
        estado: "SP",
        delivery: "sim",
        validade: "01/11/2024",
        vendedor: "João Silva",
        imagem: "../fotos/arrozIntegral.jpg"
    },
    {
        id: 2,
        nome: "Feijão Preto",
        preco: 15.00,
        cidade: "Rio de Janeiro",
        estado: "RJ",
        delivery: "não",
        validade: "05/11/2024",
        vendedor: "Maria Oliveira",
        imagem: "../fotos/feijaoPreto.jpg"
    },
    {
        id: 3,
        nome: "Açúcar Mascavo",
        preco: 12.00,
        cidade: "Belo Horizonte",
        estado: "MG",
        delivery: "sim",
        validade: "08/11/2024",
        vendedor: "Carlos Pereira",
        imagem: "../fotos/acucarMascavo.jpg"
    }
];

document.getElementById('filtrarButton').addEventListener('click', function() {
    const nome = document.getElementById('nome').value.toLowerCase();
    const preco = parseFloat(document.getElementById('preco').value) || Infinity;
    const cidade = document.getElementById('cidade').value.toLowerCase();
    const estado = document.getElementById('estado').value.toLowerCase();
    const delivery = document.getElementById('delivery').value;
    const validade = document.getElementById('validade').value;
    const vendedor = document.getElementById('vendedor').value.toLowerCase();

    const produtosFiltrados = produtos.filter(produto => {
        return (
            (nome === '' || produto.nome.toLowerCase().includes(nome)) &&
            (isNaN(preco) || produto.preco <= preco) &&
            (cidade === '' || produto.cidade.toLowerCase().includes(cidade)) &&
            (estado === '' || produto.estado.toLowerCase().includes(estado)) &&
            (delivery === '' || produto.delivery === delivery) &&
            (validade === '' || new Date(produto.validade) >= new Date(validade)) &&
            (vendedor === '' || produto.vendedor.toLowerCase().includes(vendedor))
        );
    });

    mostrarProdutos(produtosFiltrados);
});

function mostrarProdutos(produtos) {
    const container = document.querySelector('.produtos-container');
    container.innerHTML = '';

    if (produtos.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <h3><a href="../comprarProduto/comprarProduto.html?id=${produto.id}">${produto.nome}</a></h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Cidade: ${produto.cidade}</p>
            <p>Estado: ${produto.estado}</p>
            <p>Delivery: ${produto.delivery === 'sim' ? 'Sim' : 'Não'}</p>
            <p>Validade: ${produto.validade}</p>
            <p>Vendedor: <a href="../perfilCliente/perfilCliente.html?vendedor=${encodeURIComponent(produto.vendedor)}">${produto.vendedor}</a></p>
            <button onclick="window.location.href='../comprarProduto/comprarProduto.html?id=${produto.id}'">Comprar</button>
        `;

        container.appendChild(card);
    });
}

mostrarProdutos(produtos);
