console.log('Modulo de notas cargado')

const addNote = (title, body) => {
  console.log('Nota añadida: ', title, body)
}
const removeNote = (title) => {
  console.log(`Nota ${title} eliminada`)
}
const readNote = (title) => {
  console.log(`Nota ${title} leída`)
}
const listNotes = () => {
  console.log('Listado de todas las notas')
}

module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes
}
