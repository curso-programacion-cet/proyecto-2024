// Elementos del DOM
const listaCuidados = document.getElementById("lista-cuidados");
const textAreaCuidados = document.getElementById("nuevos-cuidados");
const divCuidados = document.getElementById("escribir-nuevos-cuidados");

// Escuchadores de eventos
listaCuidados.addEventListener("mouseover", () => {
    listaCuidados.style.backgroundColor = "rgb(223, 185, 250)";
});

listaCuidados.addEventListener("mouseout", () => {
    listaCuidados.style.backgroundColor = "white";
});


textAreaCuidados.addEventListener("input", (evento) => {
    let textoIngresado = evento.target.value; // De esta manera obtenemos el valor del elemento textarea
    divCuidados.innerHTML = "<ul> <li>" + textoIngresado + "</li> </ul>";
});


