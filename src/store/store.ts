import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'


import reducerItemBeer from './ducks/ItenBeer/reducer'

const createRootReducer = () => combineReducers({
  itemBeer: reducerItemBeer,
})

const store = createStore(createRootReducer(), composeWithDevTools())


export { store }










