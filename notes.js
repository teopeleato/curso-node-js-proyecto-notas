console.log('Modulo de notas cargado')
const { saveNotes, fetchNotes } = require('./utils')

const addNote = (title, body) => {
  const notes = fetchNotes()
  const note = {
    title,
    body
  }
  const duplicateNotes = notes.filter(note => note.title === title) // Como: if notes.title === title (dentro de un for)
  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  } else {
    console.log('Nota no guardada porque no existe')
  }
}

const removeNote = (title) => {
  // Obtener las notas
  const notes = fetchNotes()
  // utilizar filter para eliminar nota según title
  const filteredNotes = notes.filter(note => note.title !== title)
  // guardar notas
  saveNotes(filteredNotes)
  return (filteredNotes.length !== notes.length)
}

const readNote = (title) => {
  // Obtener las notas
  const notes = fetchNotes()
  const readNote = notes.filter(note => note.title === title)
  // const readNote = notes.find(note => note.title === title)
  return readNote[0]
}

const getAll = () => {
  return fetchNotes()
}

module.exports = {
  addNote,
  removeNote,
  readNote,
  getAll
}
