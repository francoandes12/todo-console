## Aplicacion de consola de comandos

## DESCRIPCION

Es una app, para agregar tareas o 'Todos'. Se puede agregar tareas, mostrar
todas las tareas,actualizar su estado (si esta completada o no) y borrar una
tarea. App de consola,creada con Nodejs y yargs.

## PASOS PARA SU USO

1-Bajar el codigo y ejectuar npm install,para bajar todas las dependencias de la
app \n 2-correr el comando node app seguido de alguno de los siguientes
comandos:

## COMANDOS

-crear \n -listar \n -actualizar \n -borrar

## PARAMETROS

-El comando crear recibe 1 parametro, la descripcion, puede pasarse usando el
flag --description o en su forma abreviada -d seguido de el nombre de la tarea
\n -El comando actualizar recibe 2 parametros, la descripcion y
completado,completado puede pasarse usando el flag --completado o -c seguido de
el estado de la tarea,puede ser true o false, donde true significa completado y
false lo contrario. Por defecto, si no se le pasa valor al flag -c , se tomara
por true.\n -El comando borrar recibe 1 parametro, la descripcion.
