const argv = require('./config/yargs').argv
const colors = require('colors')
const {
  crear,
  getListado,
  actualizar,
  borrar,
} = require('./por-hacer/por-hacer')
let comando = argv._[0]
switch (comando) {
  case 'crear':
    let tarea = crear(argv.descripcion)
    console.log(tarea)
    break
  case 'listar':
    let listado = getListado()
    for (const tarea of listado) {
      console.log('=========POR HACER=========='.blue)
      console.log(colors.yellow(tarea.descripcion))
      console.log(colors.red('Estado:', tarea.completado))
      console.log('============================'.blue, '\n')
    }
    break
  case 'actualizar':
    let actualizado = actualizar(descripcion, completado)
    console.log(actualizado)

    break
  case 'borrar':
    let borrado = borrar(descripcion)
    console.log(borrado)
    break

  default:
    console.log('comando desconocido')

    break
}
