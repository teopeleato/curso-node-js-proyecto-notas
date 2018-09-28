console.log('iniciando aplicacion de notas')
const notes = require('./notes.js')
const { argv } = require('yargs')
// console.log('Yargs', argv)

const comando = argv._[0]
const title = argv.title
const body = argv.body

switch (comando) {
  case 'addNote':
    notes.addNote(title, body)
    break
  case 'removeNote':
    notes.removeNote(title)
    break
  case 'readNote':
    notes.readNote(title)
    break
  case 'listNotes':
    notes.listNotes()
    break
  default:
    console.log('Comando desconocido')
    break
}
