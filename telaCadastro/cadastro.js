import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"
import { getFireStore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-getfirestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyCQieSmDEqcrR4lO46bL0Ho5IRO8hQ30Hw",
    authDomain: "inova-tec-2.firebaseapp.com",
    projectId: "inova-tec-2",
    storageBucket: "inova-tec-2.appspot.com",
    messagingSenderId: "763430227281",
    appId: "1:763430227281:web:0c49b3575a62e494d8d770"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!validateForm()) return;

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const cpfCnpj = document.getElementById('cpfCnpj').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const birthdate = document.getElementById('birthdate').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return db.collection('users').doc(user.uid).set({
                fullName: fullName,
                email: email,
                phone: phone,
                cpfCnpj: cpfCnpj,
                city: city,
                state: state,
                birthdate: birthdate,
                createdAt: new Date()
            });
        })
        .then(() => {
            alert('Cadastro realizado com sucesso!');
        })
        .catch((error) => {
            alert('Erro no cadastro: ' + error.message);
        });
});

function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!validateFullName(fullName)) {
        alert('Por favor, insira um nome completo válido.');
        return false;
    }

    if (!validatePassword(password, confirmPassword)) {
        alert('As senhas não correspondem ou são muito curtas.');
        return false;
    }

    return true;
}

function validateFullName(fullName) {
    const nameParts = fullName.trim().split(" ");
    return nameParts.length >= 2 && nameParts.every(part => part.length > 1);
}

function validatePassword(password, confirmPassword) {
    return password.length >= 6 && password === confirmPassword;
}
