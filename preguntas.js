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
    ]
  }
];

module.exports = preguntas;
