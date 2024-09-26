// Dados fictícios dos itens do carrinho
const carrinho = [
    {
        id: 1,
        nome: "Arroz Integral",
        preco: 20.00,
        quantidade: 2
    },
    {
        id: 2,
        nome: "Feijão Preto",
        preco: 15.00,
        quantidade: 1
    }
];

function atualizarCarrinho() {
    const carrinhoItems = document.getElementById('carrinhoItems');
    carrinhoItems.innerHTML = '';

    let total = 0;

    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nome}</td>
            <td>R$ ${item.preco.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantidade}" min="1" max="10" data-id="${item.id}" class="quantidade-input">
            </td>
            <td>R$ ${subtotal.toFixed(2)}</td>
            <td><button onclick="removerItem(${item.id})">Remover</button></td>
        `;

        carrinhoItems.appendChild(row);
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

function removerItem(id) {
    const index = carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }
}

// Atualizar o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCarrinho);

// Atualizar subtotal e total quando a quantidade for alterada
document.addEventListener('input', function(event) {
    if (event.target.classList.contains('quantidade-input')) {
        const id = parseInt(event.target.dataset.id);
        const quantidade = parseInt(event.target.value);
        const item = carrinho.find(item => item.id === id);

        if (item) {
            item.quantidade = quantidade;
            atualizarCarrinho();
        }
    }
});
