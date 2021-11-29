<template>
  <div>
    <div class="modal" v-if="statusChanger">
      <div class="modal-body">
        <h1 class="heading">Товар в корзине!</h1>
        <!--<button class="btn" @click="statusChanger=!statusChanger">Понятно!</button>-->
      </div>
    </div>
    <div class="container">
        <div class="element" v-for='(thing, idx) in stuff'>
          <div class="img-frame">
            <img class="gallery__img" :src='thing.image' :key='idx'>
          </div>
          <div class="trent">
            <div class="title">{{truncate(thing.title)}}</div>
            <div class="price">{{thing.price}}$</div>
            <div class="btn">
              <button class="btn" @click="cart(thing.id); performModal()">Добавить в корзину</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Context } from '@nuxt/types'
import { stuffStore } from '~/store'


@Component({
  async asyncData({ $axios } : Context) {
    const stuff = await $axios.$get('https://fakestoreapi.com/products')
    return { stuff }
  }
})
export default class extends Vue {
  // Declared as component data
  stuff = []
  check: boolean = false

  mounted() {
    if(stuffStore.stuff.length === 0) {
      stuffStore.addstuff(this.stuff)
    }
  }

  truncate(value: string) {
    let normal = 30
    return (value.length > normal ? value.substr(0, normal) + "..." : value)
  }

  cart(id: number) {
    stuffStore.manipulate(id)
  }

  performModal() {
    this.statusChanger = !this.statusChanger
    setTimeout(() => {
      this.statusChanger = !this.statusChanger
    }, 2000)
    
  }

  get statusChanger() {
    return this.check
  }

  set statusChanger(val) {
    this.check = val
  }

}
</script>
<style lang="scss">
  .heading {
    color: $dream;
  }
</style>

