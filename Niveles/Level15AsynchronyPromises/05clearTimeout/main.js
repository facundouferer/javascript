let counter = 0;
let titulo = document.querySelector('h1');
let timeoutId;

function iniciarContador() {
    counter++;
    titulo.textContent = counter;
    timeoutId = setTimeout(iniciarContador, 1000);
}

function detenerContador() {
    clearTimeout(timeoutId);
    titulo.textContent = 'Contador detenido';
}


iniciarContador();
const btnDetener = document.querySelector('#btnDetener');
btnDetener.addEventListener('click', detenerContador);
