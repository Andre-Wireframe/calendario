//Login
let user = localStorage.getItem('user');

function mostrarLogin () {
    const form = document.getElementById('form');

    if (form.style.display == 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    };
};

function login () {
    const name = document.getElementById('username');
    const grupo = document.getElementById('mygrupo');
    //const check = document.getElementById('check');

    if (name.value != '' && grupo.value != 0) {
        localStorage.setItem('user', name.value);
        window.location.href = 'calendario.html';
    } else {
        alert('Formulario incompleto por favor reintente');
    };
};

const userdiv = document.getElementById('userdiv');
userdiv.textContent = user;

//Añadiendo funciones a los botones de eve

function evebuttonfuncion (div) {

    var info = document.getElementById(div);

    if (info.style.display == 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    };

};