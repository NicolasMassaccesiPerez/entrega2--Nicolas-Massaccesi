let alumnos = [];

const agregarAlumno = () => {
  let alumno = {
    nombre: prompt("Ingrese el nombre del estudiante:"),
    nota1: parseFloat(prompt("Ingrese la primera nota del estudiante:")),
    nota2: parseFloat(prompt("Ingrese la segunda nota del estudiante:")),
    aprobado: false
  };
  alumno.aprobado = calcularPromedio(alumno) >= 7;
  alumnos.push(alumno);
};

const calcularPromedio = alumno => {
  return (alumno.nota1 + alumno.nota2) / 2;
};

const estudiantesAprobados = () => {
  return alumnos.filter(alumno => alumno.aprobado);
};

const estudiantesDesaprobados = () => {
  return alumnos.filter(alumno => !alumno.aprobado);
};

const imprimirResultado = () => {
  let aprobado = estudiantesAprobados();
  if (aprobado.length === 0) {
    alert("No hay estudiantes aprobados");
  } else {
    alert("Estudiantes aprobados:");
    aprobado.forEach(alumno => {
      let promedio = calcularPromedio(alumno);
      alert(alumno.nombre + ": " + promedio);
    });
  }
  let noAprobados = estudiantesDesaprobados();
  if (noAprobados.length === 0) {
    alert("No hay estudiantes no aprobados");
  } else {
    alert("Estudiantes no aprobados:");
    noAprobados.forEach(alumno => {
      let promedio = calcularPromedio(alumno);
      alert(alumno.nombre + ": " + promedio);
    });
  }
};

while (true) {
  let option = prompt("Seleccione una opción:\n1. Agregar estudiante\n2. Mostrar resultados\n3. Salir");
  if (option === "1") {
    agregarAlumno();
  } else if (option === "2") {
    imprimirResultado();
  } else if (option === "3") {
    break;
  } else {
    alert("Opción inválida");
  }
}






