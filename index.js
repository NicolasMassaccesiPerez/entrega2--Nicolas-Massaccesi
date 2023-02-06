class Alumno {
    constructor(nombre, nota1, nota2) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.aprobado = (this.calcularPromedio() >= 7);
    }

    calcularPromedio() {
        return (this.nota1 + this.nota2) / 2;
    }
}

const alumnos = [];

function agregarAlumno() {
    const nombre = prompt("Ingrese el nombre del estudiante:");
    const nota1 = parseFloat(prompt("Ingrese la primera nota del estudiante:"));
    const nota2 = parseFloat(prompt("Ingrese la segunda nota del estudiante:"));
    const alumno = new Alumno(nombre, nota1, nota2);
    alumnos.push(alumno);
  }
  


function estudiantesAprobados() {
  return alumnos.filter(alumno => alumno.aprobado);
}

function estudiantesDesaprobados() {
  return alumnos.filter(alumno => !alumno.aprobado);
}

function imprimirResultado() {
    const aprobados = estudiantesAprobados();
    let mensaje = "Alumnos aprobados:\n";
    aprobados.forEach (alumno => {
        mensaje += `- ${alumno.nombre} (${alumno.calcularPromedio()})\n`;
    });
    alert(mensaje);

    const noAprobado = estudiantesDesaprobados();
    mensaje = "Alumnos no aprobados:\n";
    noAprobado.forEach (alumno => {
        mensaje += `- ${alumno.nombre} (${alumno.calcularPromedio()})\n`;
    });
    alert(mensaje);
    }


    let option;
    do {
      option = parseInt(prompt("Elige una opción:\n1) Agregar alumno\n2) Ver resultados\n3) Salir"));
      if (option === 1) {
        agregarAlumno();
      } else if (option === 2) {
        imprimirResultado();
      }
    } while (option !== 3);








