import React from 'react'
import {newVote} from '../reducers/anecdoteReducer'

const Anecdote = ({note, handleClick}) => {
    return (
        <div className="note">
         {note.content}  
          
          <div className="votes">
            has {note.votes} votes   
            <button className="button" onClick={handleClick}> äänestä </button>
         </div>

        </div>  
    )   
} 
    
const Anecdotes = ({store}) => {
const {anecdotes, filter} = store.getState()
const anecdotesToShow = () => {
    // if (filter === 'ALL') {
    //     return anecdotes
    // }

    // if (filter === 'ZERO') {
    //     return anecdotes.filter(anecdote => anecdote.votes === 2)   
    // }

    return (
    anecdotes
    )
}



    return (
        <ul>
            {anecdotesToShow().map(anecdote =>
            <Anecdote
            key={anecdote.id}
            note={anecdote}
            handleClick={() =>
                store.dispatch(newVote(anecdote.id))
                }  
            />
            )}
        </ul>
    )
    
}
export default Anecdotes



  


      