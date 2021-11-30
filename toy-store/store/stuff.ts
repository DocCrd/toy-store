import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import Thing from '@/models/Thing'

export interface IStuffState {
  stuff: Thing[]
}


@Module({ stateFactory: true, namespaced: true, name: 'stuff', preserveState: true })
export default class Stuff extends VuexModule implements IStuffState {
  stuff: Thing[] = []

  @Mutation
  addstuff(things: Thing[]) {
    this.stuff = things.map(thing => {
      let storeThing:Thing = {
        id: thing.id,
        title: thing.title,
        price: thing.price,
        description: thing.description,
        category: thing.category,
        image: thing.image,
        rating: thing.rating,
        cart: false,
        qnt: 0
      }
      return storeThing
    })
  }

  @Mutation
  manipulate(id: number, add: boolean = true) {
    if (!add) {
      this.stuff[id - 1].qnt = 0
      this.stuff[id - 1].cart = false
      return;
    }

    let qnt = this.stuff[id - 1].qnt
    
    if (!qnt) {
      this.stuff[id - 1].cart = true
    }
    
    this.stuff[id - 1].qnt++
  }

  @Mutation
  remove() {

    this.stuff = []
  }

  @Mutation
  clearChecks() {

    this.stuff.forEach(el => {
      if (el.cart) {
        el.cart = !el.cart
      }
      el.qnt = 0
    })
  }

  @Mutation
  loggme() {

    //localStorage.vuex = { stuff: this.stuff }
  }

}