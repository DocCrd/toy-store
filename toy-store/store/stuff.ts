import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import Thing from '@/models/Thing'

export interface IStuffState {
  stuff: Thing[]
}

@Module({ stateFactory: true, namespaced: true, name: 'stuff' })
export default class Stuff extends VuexModule implements IStuffState {
  stuff: Thing[] = []

  @Mutation
  addstuff(things: Thing[]) {

    things.forEach((thing) => {
      let storeThing:Thing = {
        id: thing.id,
        title: thing.title,
        price: thing.price,
        description: thing.description,
        category: thing.category,
        image: thing.image,
        rating: thing.rating,
        cart: false
      }
      this.stuff = [...this.stuff, storeThing]
    })
  }

  @Mutation
  manipulate(id: number) {

    this.stuff[id - 1].cart = !this.stuff[id - 1].cart
  }

  @Mutation
  remove() {

    this.stuff = []
  }

}