import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { createNote } from './reducers/anecdoteReducer'
import { notificationChange } from './reducers/notificationReducer'
import './index.css'



const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: notificationReducer
})

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))
store.dispatch(notificationChange('SET_FILTER'))
store.dispatch(createNote())

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
  }

render()
store.subscribe(render)