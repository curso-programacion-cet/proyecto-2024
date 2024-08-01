// Elementos del DOM
const botonComenzar = document.getElementById("boton-comenzar");



// Escuchadores de eventos
botonComenzar.addEventListener("click", () => {
    // Podemos utilizar la propiedad location (ubicación) del objeto window (ventana)
    // para cambiar algunas propiedades de la ubicación (podemos redirigir a otro sitio web o al nuestro mismo)
    // Pueden escribir en la consola del navegador window.location para ver que propiedades tiene
    window.location.href = "../html/cuidados.html"; // similar al tag "<a>"
});



