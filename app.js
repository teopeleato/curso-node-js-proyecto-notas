console.log('iniciando aplicacion de notas')
const notes = require('./notes.js')
const { argv } = require('yargs')
const { logNote } = require('./utils')

console.log(argv)

const comando = argv._[0]

switch (comando) {
  case 'addNote':
    const note = notes.addNote(argv.title, argv.body)
    if (note) {
      console.log('Nota creada')
      logNote(note)
    } else {
      console.log('Ya existe una nota con este título')
    }
    break

  case 'removeNote':
    const noteRemoved = notes.removeNote(argv.title)
    const message = noteRemoved ? `Nota ${argv.title} eliminada` : 'Nota no encontrada'
    console.log(message)
    break

  case 'readNote':
    const noteRead = notes.readNote(argv.title)
    if (noteRead) {
      logNote(noteRead)
    } else {
      console.log('No existe una nota con este título')
    }
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
