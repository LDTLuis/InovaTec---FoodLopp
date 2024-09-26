// Dados estáticos para email e senha predefinidos
const predefinedEmail = "admin@exemplo.com";
const predefinedPassword = "admin123";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do form

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Verifica se o email e senha estão corretos
    if (email === predefinedEmail && password === predefinedPassword) {
        // Redireciona para a página inicial se o login for bem-sucedido
        window.location.href = "/paginaInicial/paginaInicial.html";
    } else {
        // Exibe mensagem de erro se os dados estiverem incorretos
        errorMessage.textContent = "Email ou senha incorretos!";
        errorMessage.style.display = 'block';
    }
});
