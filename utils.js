const fs = require('fs')

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const logNote = (note) => {
  console.log(`\tTítulo: ${note.title}`)
  console.log(`\tTexto: ${note.body}`)
}

module.exports = { fetchNotes, saveNotes, logNote }
