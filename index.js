const inquirer = require("inquirer");
const chalk = require("chalk");
const { program } = require("commander");
const fetch = require("node-fetch");
require("dotenv").config();
const preguntas = require("./preguntas.js");

program
  .option("-c, --color <color>", "Se usa para introducir su color")
  .option("-a, --abrev", "Por si desea la información abreviada");
program.parse(process.argv);
const options = program.opts();
console.log(options);
const { abrev, color } = options;

/* fetch(`${process.env.URL}?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
    .then(resp => resp.json())
    .then(lineas => console.log(lineas.features.find(linea => linea.properties.NOM_LINIA === "L10S"))); */

inquirer.prompt(preguntas)
  .then(respuestas => {
    if (respuestas.tipo === "Bus") {
      console.log(chalk.yellow("No tenemos información disponible de las paradas. Por favor, diríjase a https://www.tmb.cat/ca/home"));
      process.exit(0);
    }
    if (respuestas.lineasConsulta) {
      fetch(`${process.env.URL}?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
        .then(resp => resp.json())
        .then(lineas => {
          const linea = lineas.features.find(linea => linea.properties.NOM_LINIA === respuestas.lineasConsulta);
          if (linea === undefined) {
            if (respuestas.informacionErrores) {
              console.log(chalk.red.bold("ERROR, no existe la línea"));
              process.exit(0);
            } else {
              process.exit(0);
            }
          }
          console.log(chalk.hex(`${color === true ? color : `${linea.properties.COLOR_LINIA}`}`)(`Nombre de la linea: ${linea.properties.NOM_LINIA} , descripcion: ${linea.properties.DESC_LINIA}`));
          fetch(`${process.env.URL}/${linea.properties.CODI_LINIA}/estacions?app_id=${process.env.APP_ID}?app_key${process.env.APP_KEY}`)
            // somehow este fetch no esta bien hecho, si en vez del template literals le meto una url de prueba a chapa me devuelve las paradas
            .then(resp => resp.json())
            .then(paradas => {
              console.log(paradas);
            });
        });
    }
  });
