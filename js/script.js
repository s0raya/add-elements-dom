// Aquí tu código

const lista = document.getElementById('lista');
const boton = document.getElementById('agregar');

boton.addEventListener('click', function() {
    const elemento = prompt("¿Que quieres agregar?");

    // UNA FORMA DE HACERLO
    const elementoLista = document.createElement("li");
    elementoLista.innerText = elemento;
    lista.appendChild(elementoLista);

    // OTRA FORMA DE HACERLO MAS SENCILLA
    //lista.insertAdjacentHTML('afterbegin', `<li>${elemento}</li>`)
});


