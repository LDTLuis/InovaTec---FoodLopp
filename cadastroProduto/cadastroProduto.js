document.getElementById('cadastrarProdutoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const marca = document.getElementById('marca').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const validade = document.getElementById('validade').value;
    const delivery = document.getElementById('delivery').value;
    const preco = parseFloat(document.getElementById('preco').value);

    // Simula a ação de cadastro
    console.log({
        nome,
        marca,
        cidade,
        estado,
        validade,
        delivery,
        preco
    });

    // Aqui você pode adicionar o código para enviar os dados para um backend
    alert('Produto cadastrado com sucesso!');
});
