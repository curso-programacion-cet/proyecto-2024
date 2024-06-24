// Elementos del DOM
const botonEnviar = document.getElementById("boton-enviar");
const botonReset = document.getElementById("boton-reset");
const textoGracias = document.getElementById("texto-gracias");
    // Recordemos que devolvera un array, al que luego debemos recorrer para acceder a cada elemento
const filasFormulario = document.getElementsByClassName("filas-formulario");
const inputFecha = document.getElementById("fecha");
const parrafoFecha = document.getElementById("texto-fecha");

// Escuchadores de eventos
botonEnviar.addEventListener("click", () => {
    textoGracias.innerText = "Tu mensaje fue enviado. Gracias por contactarnos";
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