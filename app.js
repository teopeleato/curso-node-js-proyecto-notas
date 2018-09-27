console.log('iniciando aplicacion de notas')
const notes = require('./notes.js')
const { argv } = require('yargs')

console.log(argv)

const comando = argv._[0]

// const param = process.argv[2]

switch (comando) {
  case 'addNote':
    notes.addNote(argv.title, argv.body)
    break
  case 'removeNote':
    console.log('Eliminando una nota...')
    break
  case 'readNote':
    console.log('Leyendo una nota...')
    break
  case 'listNotes':
    console.log('Listando notas...')
    break
  default:
    console.log('Comando desconocido')
    break
}
