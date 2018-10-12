
enum Sexo {
  M = "MASCULINO",
  F = "FEMENINO"
}

interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  sexo: Sexo;  
}

function nombreCompleto (datos: Persona): string {
  return `Tu Nombre es: ${datos.nombre} ${datos.apellidos}`;
}

const sounix: Persona = { 
  nombre: "Aldrin Debian", 
  apellidos: "Gonzalez Araujo", 
  edad: 37, 
  sexo: Sexo.M
}

console.log(nombreCompleto(sounix));
