const inquirer = require("inquirer");
const chalk = require("chalk");
const { program } = require("commander");
const preguntas = require("./preguntas.js");

program
  .option("-c, --color <color>", "Se usa para introducir su color")
  .option("-a, --abrev", "Por si desea la información abreviada");

program.parse(process.argv);

const options = program.opts();

console.log(options);

inquirer.prompt(preguntas)
  .then(respuestas => {
    if (respuestas.tipo === "Bus") {
      console.log(chalk.yellow("No tenemos información disponible de las paradas. Por favor, diríjase a https://www.tmb.cat/ca/home"));
      process.exit(0);
    }
    console.log("Jeje");
  });
