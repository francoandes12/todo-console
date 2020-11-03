const description = {
  demand: true,
  alias: 'd',
  desc: 'descripcion de la tarea por hacer'
}

const completado = {
  default: true,
  alias: 'c'
}
const argv = require('yargs')
  .command('crear', 'Crea un todo', description)
  .command('borrar', 'Borrar un todo', description)
  .command('actualizar', 'Actualiza el estado completado de una tarea', {
    description,
    completado
  })
  .help().argv
module.exports = {
  argv
}
