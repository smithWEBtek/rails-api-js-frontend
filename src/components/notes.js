class Notes {
  constructor() {
    this.notes = []
    this.adapter = new NotesAdapter()
    // this.bindEventListeners()
    this.fetchAndLoadNotes()
  }

  fetchAndLoadNotes() {
    this.adapter
      .getNotes()
      .then(notes => {
        console.log('notes from api: ', notes)
        notes.forEach(note => this.notes.push(note))
      })
      .then(()=>{
        this.render()
      })
  }
  
  render () {
    const renderedNotes = this.notes.map(note => {
      return (`
        <div>
          <h3>${note.title}</h3>
          <p>${note.body}</p>
        </div>
      `)
    }).join('')
    
    const notesContainer = document.getElementById('notes-container')
    notesContainer.innerHTML = renderedNotes
  }
  
}


