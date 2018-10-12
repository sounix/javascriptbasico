var Sexo;
(function (Sexo) {
    Sexo[Sexo["M"] = 0] = "M";
    Sexo[Sexo["F"] = 1] = "F";
})(Sexo || (Sexo = {}));

function nombreCompleto(datos) {
    return 'Tu Nombre es: ' + datos.nombre + ' ' + datos.apellidos;
}

console.log(nombreCompleto({
    nombre: "Aldrin",
    apellidos: "Gonzalez Cancino",
    edad: 37,
    sexo: 0 /* M */
}));
