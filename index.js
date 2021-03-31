const inquirer = require("inquirer");
const chalk = require("chalk");
const preguntas = require("./preguntas.js");

inquirer.prompt(preguntas)
  .then(respuestas => {
    if (respuestas.tipo === "Bus") {
      console.log(chalk.yellow("No tenemos información disponible de las paradas. Por favor, diríjase a https://www.tmb.cat/ca/home"));
      process.exit(0);
    }
  });
