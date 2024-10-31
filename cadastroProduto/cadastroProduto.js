document.getElementById('cadastrarProdutoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const marca = document.getElementById('marca').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const validade = document.getElementById('validade').value;
    const delivery = document.getElementById('delivery').value;
    const preco = parseFloat(document.getElementById('preco').value);

    console.log({
        nome,
        marca,
        cidade,
        estado,
        validade,
        delivery,
        preco
    });

    alert('Produto cadastrado com sucesso!');
});

document.getElementById('foto').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : 'Nenhum arquivo selecionado';
    document.getElementById('file-name').textContent = fileName;
});
