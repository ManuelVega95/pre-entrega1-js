// Ejercicio 1 - Buscar un grande del fútbol argentino //

let club = prompt("Ingrese su club");

if (club === "Boca"){
    alert("El club ingresado es un Grande del fútbol argentino"); 
} else if (club === "River"){
    alert("El club ingresado es un Grande del fútbol argentino"); 
} else if (club === "Independiente"){
    alert("El club ingresado es un Grande del fútbol argentino"); 
} else if (club === "Racing"){
    alert("El club ingresado es un Grande del fútbol argentino"); 
} else if (club === "San Lorenzo"){
    alert("El club ingresado es un Grande del fútbol argentino"); 
}
else{
    alert("No es un club Grande del fútbol argentino");
}

// Ejercicio 2 - Buscar cantidad de Copas Internacionales //

let copasInternacionales = parseInt(prompt("Ingrese sus Copas Internacionales"))

if(copasInternacionales >= 18){
    alert("Sos un gigante del fútbol mundial");
}else if(copasInternacionales >= 15 && copasInternacionales <= 17){
    alert("Tenés muchas Copas Internacionales");
} else if(copasInternacionales >= 7 && copasInternacionales <= 14) {
    alert("Tenés algunas Copas Internacionales");
} else if(copasInternacionales >= 1 && copasInternacionales <= 6) {
    alert("Tenés pocas Copas Internacionales");
} else(
    alert("No tenés Copas Internacionales")
)