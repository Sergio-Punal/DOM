const $d = document,
    
    $lista = $d.querySelector("li"),
    $pregunta = $d.querySelector("#pregunta"),
    $opcionesRespuesta = $d.querySelectorAll("label"),
    $btnSubmit = $d.querySelector("#submit");

    const quiz = [
        {
          pregunta: "¿Qué lenguaje de programación se ejecuta en un navegador web?",
          respuestas: ["Java", "C", "Python", "Javascript"],
          correcta: 3,
        },
        {
          pregunta: "CSS es acrónimo de ...",
          respuestas: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats",
          ],
          correcta: 1,
        },
        {
          pregunta: "HTML es acrónimo de ...",
          respuestas: [
            "Hypertext Markup Language",
            "Hypertext Markdown Language",
            "Hyperloop Machine Language",
            "Helicopters Terminals Motorboats Lamborginis",
          ],
          correcta: 0,
        },
        {
          pregunta: "¿En qué año apareció JavaScript?",
          respuestas: [1996, 1995, 1994, "Ninguna de las opciones anteriores"],
          correcta: 1,
        },
      ];
let indice = 0;
let aciertos = 0;
function renderPregunta(indice) {
    $pregunta.innerHTML = quiz[indice]
}
