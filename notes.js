console.log('Modulo de notas cargado')

const addNote = (title, body) => {
  console.log('Nota añadida: ', title, body)
}

const removeNote = (idNota) => {
  console.log(`Nota ${idNota} eliminadas`)
  return 'Nota borrada'
}

const readNote = (idNota) => {
  return 'Nota leida'
}

const listNotes = () => {
  return 'Listar'
}

module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes
}
