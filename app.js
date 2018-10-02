console.log('iniciando aplicacion de notas')
const notes = require('./notes.js')
const { argv } = require('yargs')
const { logNote } = require('./utils')

console.log(argv)

const comando = argv._[0]
const title = argv.title
const body = argv.body

switch (comando) {
  case 'addNote':
    const note = notes.addNote(title, body)
    if (note) {
      console.log('Nota creada')
      logNote(note)
    } else {
      console.log('Ya existe una nota con este título')
    }
    break

  case 'removeNote':
    const noteRemoved = notes.removeNote(title)
    const message = noteRemoved ? `Nota ${title} eliminada` : 'Nota no encontrada'
    console.log(message)
    notes.removeNote(title)
    break

  case 'readNote':
    const noteRead = notes.readNote(title)
    if (noteRead) {
      logNote(noteRead)
    } else {
      console.log('No existe una nota con este título')
    }
    notes.readNote(title)
    break

  case 'listNotes':
    const allNotes = notes.getAll()
    console.log(`Mostrando ${allNotes.length} notas.`)
    allNotes.forEach((note) => logNote(note))
    break

  default:
    console.log('Comando desconocido')
    break
}
