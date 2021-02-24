export enum TypesBeer {
  ITENS_BEER = 'ITENS_BEER'
}

export interface ItemBeer {
  id: number
  image: string
  description: string
  title: string
  price: string
  qtd: number
}

export interface ArrayItemBeer {
  itensBerrs: ItemBeer[]

}

export interface Beer {
  itemBeer: ArrayItemBeer
}