// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombre = document.querySelector('#amigo').value;
    if (nombre === '') {
        alert('Por favor, inserte un nombre');
        return;
    }
    
    amigos.push(nombre);
    alert(`Amigo ${nombre} agregado con éxito`);
    mostrarAmigos();
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    // Verifica si no es null o vacío
    if (amigos.length === 0) {
        alert('Por favor, inserte al menos un amigo');
        return;
    }
    indiceRamdom = Math.floor(Math.random() * amigos.length);
    asignarTextoElemento('#resultado', `El amigo secreto es ${amigos[indiceRamdom]}`);
}