let estudiantes = [
  {
    nombre: "Luis",
    semestre: 5,
    nota: 14,
  },
  { nombre: "Daniela", semestre: 2, nota: 17 },
  { nombre: "Carlos", semestre: 3, nota: 10},
  { nombre: "Clara", semestre: 1, nota: 16},
  { nombre: "David", semestre: 4, nota: 19}
];

let estudSemestre = (estudiantes, semestre) => {
  let estud = [];
  estudiantes.forEach((est) => {
    if (est.semestre == semestre) estud.push(est);
  });
  return estud;
};

let salida = document.getElementById("salida");
salida.innerHTML = "Resultados";
salida.innerHTML += `<br> Estudiantes por semestre:`;
salida.innerHTML += "<br> Semestre 1:" + JSON.stringify(estudSemestre(estudiantes, 1));
salida.innerHTML += "<br> Semestre 2:" + JSON.stringify(estudSemestre(estudiantes, 2));
salida.innerHTML += "<br> Semestre 3:" + JSON.stringify(estudSemestre(estudiantes, 3));
salida.innerHTML += "<br> Semestre 4:" + JSON.stringify(estudSemestre(estudiantes, 4));
salida.innerHTML += "<br> Semestre 5:" + JSON.stringify(estudSemestre(estudiantes, 5));
