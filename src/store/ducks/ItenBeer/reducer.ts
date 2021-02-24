import { itensBeer } from './action'
import {ArrayItemBeer, TypesBeer} from './types'

const initialStatePost: ArrayItemBeer  = {
  itensBerrs: [],
}

function reducerItemBeer(state = initialStatePost, action: any) {

  switch(action.type){

    case TypesBeer.ITENS_BEER:

        const newBeers = [...state.itensBerrs, action.payload]

        const novo = newBeers.map((item) =>(
          {...item, qtd: 0}
        ))

        const tt  = novo.filter((thing, index, self) =>
            index === self.findIndex((t) => (
            t.id === thing.id
          ))
        )

      return {
        itensBerrs: tt
      }

    case 'ADD_CART':
      console.log(`clicou no id: ${action.id}`)
      const aa = [...state.itensBerrs].map((item) => {
        item.id === action.id && item.qtd++
        return item
      })

    return {
      itensBerrs: aa
    }

  case 'REMOVE_CART':
    console.log(`clicou no id: ${action.id}`)
    const bb = [...state.itensBerrs].map((item) => {
      item.id === action.id && item.qtd--
      return item
    })

    return {
      itensBerrs: bb
    }

  case 'CLEAR_CART':

    const cc = [...state.itensBerrs].map((item) => {
      item.qtd = 0
      return item
    })

    return {
      itensBerrs: cc
    }
      
    default: 
      return state
  }
      
}

export default reducerItemBeer
