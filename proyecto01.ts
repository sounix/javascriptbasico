
enum Sexo {
  M,
  F
}

interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: Sexo;  
}

function nombreCompleto(datos: Persona) {
  return 'Tu Nombre es: ' + datos.nombre + ' ' + datos.apellidos;
}

console.log(nombreCompleto({ 
  nombre: "Aldrin", 
  apellidos: "Gonzalez Cancino", 
  edad: 37, 
  sexo: Sexo.M
}));
