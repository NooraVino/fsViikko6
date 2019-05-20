import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'


const App = (props) => { 
  const filterSelected = (value) => () => {
    console.log(value)
  }
  
  return (
    <div >
      <AnecdoteList store={props.store}/> 
      <AnecdoteForm store={props.store}/>
   
    {/* <div>
        <div class="notes">
         
          nolla   <input type="radio" name="filter"
            onChange={filterSelected('ZERO')} />
          kaikki <input type="radio" name="filter"
            onChange={filterSelected('ALL')} />
        </div>
      </div> */}
</div>
  )
}

export default App



