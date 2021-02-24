import { action } from 'typesafe-actions'
import { TypesBeer, ArrayItemBeer } from './types'


export const itensBeer = (payload: ArrayItemBeer) => action(TypesBeer.ITENS_BEER, payload)
