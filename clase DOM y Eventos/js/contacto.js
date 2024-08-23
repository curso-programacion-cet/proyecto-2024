// Elementos del DOM
const botonEnviar = document.getElementById("boton-enviar");
const botonReset = document.getElementById("boton-reset");
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputPregunta = document.getElementById("pregunta");

    // Recordemos que getElementsByClassName devolvera un array, 
    // al que luego debemos recorrer para acceder a cada elemento
const filasFormulario = document.getElementsByClassName("filas-formulario");
const inputRadioGrupoCursada = document.getElementsByClassName("grupo-cursada-opciones");

const inputFecha = document.getElementById("fecha");
const parrafoFecha = document.getElementById("texto-fecha");
const checkboxConociaCET = document.getElementById("conocia-cet-checkbox");


// Escuchadores de eventos
botonEnviar.addEventListener("click", () => {
    // primero voy a validar que el formulario fue completado, sino, no continuamos
    let pasaLasValidaciones = validarInputsFormulario();

    if (!pasaLasValidaciones) {
        alert("El formulario no está completo");
        return; // cuando ponemos "return" termina la función, por lo tanto, no vamos a ejecutar lo que sigue
    }

    // a esta altura, ya pasó las validaciones
    // primero me aseguro que no exista el elemento, 
    // porque si existe, estaremos creando uno nuevo, exactamente igual, y habrá muchos "textos-gracias"
    borrarTextoGracias();
    
    let textoGracias = document.createElement("p");
    textoGracias.id = "texto-gracias"; // agrego un id para poder luego hacer getElementById

    textoGracias.innerHTML = inputNombre.value + " " + inputApellido.value + ", tu mensaje fue enviado. <br> "
    + "Gracias por formar parte del grupo N° " + armarElTextoDelGrupoElegido();

    if (checkboxConociaCET.checked) {
        textoGracias.innerHTML += "<br> ¡Me alegro que hayas vuelto a los programas de CET!";
    } else {
        textoGracias.innerHTML += "<br> ¡Bienvenida a la comunidad CET!";
    }

    // agrego el nuevo elemento al final del elemento form
    formulario.append(textoGracias);
});

botonReset.addEventListener("click", () => {
    borrarTextoGracias();
    parrafoFecha.innerText = ""; // texto vacío para la fecha
});


for (elemento of filasFormulario) {
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


function borrarTextoGracias() {
    // no puedo saber todavia si ya existe este elemento o no, porque lo crearemos dinamicamente
    // aca en javascript, solo si ya se clickeo el boton de enviar
    let textoGracias = document.getElementById("texto-gracias");

    // si esta creado el parrafo con el texto agradeciendo, 
    // lo voy a borrar en esta funcion
    if (textoGracias) { // esto es similar a: if (textoGracias != null && textoGracias != undefined)
        textoGracias.remove();
    }
}

function validarInputsFormulario() {
    // si el nombre o el apellido o la pregunta estan vacios, NO es válido
    if (inputNombre.value == "" || inputApellido.value == "" || inputPregunta.value == "") {
        return false;
    }

    if (inputFecha.value == "") {
        return false;
    }
    
    // recorro las opciones a ver si alguna fue tildada, sino, NO es válido
    let hayAlgunaOpcionElegida = false;
    
    for (opcion of inputRadioGrupoCursada) {
        if (opcion.checked) {
            hayAlgunaOpcionElegida = true;
        }
    }

    if (!hayAlgunaOpcionElegida) {
        return false;
    }

    // si llegó hasta acá, significa que pasó todas las validaciones
    return true;
}

function armarElTextoDelGrupoElegido() {
    let grupoCursada;
    for (opcion of inputRadioGrupoCursada) {
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

    return grupoCursada + " '" + nombreDelGrupo + "' ";
}

function armarElTextoDeLaFecha(textoFecha) { // "2024-08-15" --> ["2024", "08", "15"]
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