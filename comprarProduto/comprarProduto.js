const produtos = [
    {
        id: 1,
        nome: "Arroz Integral",
        marca: "Marca A",
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
        marca: "Marca B",
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
        marca: "Marca C",
        preco: 12.00,
        cidade: "Belo Horizonte",
        estado: "MG",
        delivery: "sim",
        validade: "08/11/2024",
        vendedor: "Carlos Pereira",
        imagem: "../fotos/acucarMascavo.jpg"
    }
];

function getProdutoById(id) {
    return produtos.find(produto => produto.id === parseInt(id, 10));
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');
    
    if (produtoId) {
        const produto = getProdutoById(produtoId);
        if (produto) {
            document.getElementById('produtoNome').textContent = produto.nome;
            document.getElementById('produtoMarca').textContent = produto.marca;
            document.getElementById('produtoPreco').textContent = produto.preco.toFixed(2);
            document.getElementById('produtoCidade').textContent = produto.cidade;
            document.getElementById('produtoEstado').textContent = produto.estado;
            document.getElementById('produtoDelivery').textContent = produto.delivery === 'sim' ? 'Sim' : 'Não';
            document.getElementById('produtoValidade').textContent = produto.validade;
            document.getElementById('vendedorLink').textContent = produto.vendedor;
            document.getElementById('vendedorLink').href = `../perfilCliente/perfilCliente.html?vendedor=${encodeURIComponent(produto.vendedor)}`;

            document.getElementById('produtoImagem').src = produto.imagem;
            document.getElementById('produtoImagem').alt = produto.nome;
        } else {
            document.querySelector('.container').innerHTML = '<p>Produto não encontrado.</p>';
        }
    } else {
        document.querySelector('.container').innerHTML = '<p>ID do produto não fornecido.</p>';
    }
});
