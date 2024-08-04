// Elementos del DOM
const botonEnviar = document.getElementById("boton-enviar");
const botonReset = document.getElementById("boton-reset");
const textoGracias = document.getElementById("texto-gracias");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
    // Recordemos que getElementsByClassName devolvera un array, 
    // al que luego debemos recorrer para acceder a cada elemento
const filasFormulario = document.getElementsByClassName("filas-formulario");
const inputRadioGrupoCursada = document.getElementsByClassName("grupo-cursada-opciones");

const inputFecha = document.getElementById("fecha");
const parrafoFecha = document.getElementById("texto-fecha");
const checkboxConociaCET = document.getElementById("conocia-cet-checkbox");


// Escuchadores de eventos
botonEnviar.addEventListener("click", () => {
    let grupoCursada;
    for (const opcion of inputRadioGrupoCursada) {
        if (opcion.checked) {
            grupoCursada = opcion.value;
        }
    }

    let nombreDelGrupo;
    if (grupoCursada == "1") {
        nombreDelGrupo = "Ada Lovelace";
    }
    if (grupoCursada == "2") {
        nombreDelGrupo = "Grace Hopper";
    }

    textoGracias.innerHTML = inputNombre.value + " " + inputApellido.value + ", tu mensaje fue enviado. <br> "
    + "Gracias por formar parte del grupo N° " + grupoCursada + " '" + nombreDelGrupo + "' ";

    if (checkboxConociaCET.checked) {
        textoGracias.innerHTML += "<br> ¡Me alegro que hayas vuelto a los programas de CET!";
    } else {
        textoGracias.innerHTML += "<br> ¡Bienvenida a la comunidad CET!";
    }
});

botonReset.addEventListener("click", () => {
    textoGracias.innerText = "";
});


for (const elemento of filasFormulario) {
    elemento.addEventListener("keydown", function(evento) {
        if (evento.key == "@" || evento.key == "#" || evento.key == "$" || evento.key == "%") {
            alert("Los caracteres @, #, $ y % no se encuentran permitidos, por favor, borralos");
        }
    });
}


inputFecha.addEventListener("change", (evento) => {
    let textoFecha = evento.target.value; // Por ejemplo, 2024-12-31
    parrafoFecha.innerText = armarElTextoDeLaFecha(textoFecha);
});



function armarElTextoDeLaFecha(textoFecha) {
    let arrayFecha = textoFecha.split("-"); // Separo el texto por el simbolo "-" y guardo elementos en un array: [2024, 12, 31]
    
    let numeroAnio = arrayFecha[0];
    let numeroMes = arrayFecha[1];
    let numeroDia = arrayFecha[2];
    let mes = "";

    if (numeroMes == "01") {
        mes = "Enero";
    }
    if (numeroMes == "02") {
        mes = "Febrero";
    }
    if (numeroMes == "03") {
        mes = "Marzo";
    }
    if (numeroMes == "04") {
        mes = "Abril";
    }
    if (numeroMes == "05") {
        mes = "Mayo";
    }
    if (numeroMes == "06") {
        mes = "Junio";
    }
    if (numeroMes == "07") {
        mes = "Julio";
    }
    if (numeroMes == "08") {
        mes = "Agosto";
    }
    if (numeroMes == "09") {
        mes = "Septiembre";
    }
    if (numeroMes == "10") {
        mes = "Octubre";
    }
    if (numeroMes == "11") {
        mes = "Noviembre";
    }
    if (numeroMes == "12") {
        mes = "Diciembre";
    }

    return "Fecha: " + numeroDia + " de " + mes + " del " + numeroAnio;
}