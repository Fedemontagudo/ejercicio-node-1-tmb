const preguntas = [
  {
    type: "list",
    message: "¿Qué tipo de transporte quiere consultar?",
    name: "tipo",
    choices: [
      {
        name: "Metro",
        value: "Metro"
      },
      {
        name: "Bus",
        value: "Bus"
      }
    ],
  },
  {
    type: "checkbox",
    message: "¿Qué información extra quiere obtener de cada parada?",
    name: "informacionParada",
    choices: [
      {
        name: "Coordenadas",
        value: "Coordenadas"
      },
      {
        name: "Fecha de inaguracion",
        value: "fecha de inaguracion"
      }
    ],
    when: respuestas => respuestas.tipo === "Metro"
  },
  {
    type: "confirm",
    message: "¿Quiere que le informemos de los errores?",
    name: "informacionErrores",
    when: respuestas => respuestas.tipo === "Metro"
  },
  {
    type: "input",
    message: "¿Qué línea quiere consultar?",
    name: "lineasConsulta",
    when: respuestas => respuestas.tipo === "Metro",
  }
];

module.exports = preguntas;
