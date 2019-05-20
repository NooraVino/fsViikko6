import { createNote } from '../reducers/anecdoteReducer'
import React from 'react'

const newNote = (props) => {
const addNote = (event) => {
    event.preventDefault()
    props.store.dispatch(
    createNote(event.target.note.value)
  )
  event.target.note.value = ''
}
return (
    <form onSubmit={addNote} >
        <input name="note" />
        <button className="button" type="submit">lisää</button>
      </form>
)

}
export default newNote