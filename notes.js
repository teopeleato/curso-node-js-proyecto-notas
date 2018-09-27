console.log('Modulo de notas cargado')

const addNote = () => {
  console.log('Nueva nota')
  return 'Nueva nota'
}

const removeNote = (idNota) => {
  console.log(`Nota ${idNota} eliminada`)
  return 'Nota borrada'
}

module.exports = {
  addNote,
  removeNote
}
