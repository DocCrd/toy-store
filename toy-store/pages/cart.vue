<template>
  <div>
    <div class="modal" v-if="statusChanger">
      <div class="modal-body">
        <h1>Вы успешно приобрели товары!</h1>
        <button class="btn" @click="statusChanger=!statusChanger">Понятно!</button>
      </div>
    </div>
    <div class="cart-thing" v-for="(thing, idx) in tobuy">
      <div class="title-price">
        <div class="title-cart">{{thing.title}}</div>
        <div class="price-cart">{{thing.price}}$</div>
      </div>
      <div class="cart-qnt">{{thing.qnt + 'шт.'}}</div>
      <button class="btn" v-if="false" @click="cart(thing.id)">Удалить</button>
    </div>
    <div v-if="overal">
      <div class="total">Итого {{Math.round(overal)}}$</div>
      <button class="checkout btn" @click="statusChanger=!statusChanger; cartClearChecks()">Оформить заказ</button>
    </div>
    <div v-else class="warning">Ничего не выбрано!</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Context } from '@nuxt/types'
import { stuffStore } from '~/store'
import Thing from '@/models/Thing'


@Component
export default class extends Vue {
  tobuy: Thing[] = []
  overal: number = 0
  check: boolean = false
  mounted() {

    stuffStore.stuff.forEach(thing => {
      if (thing.cart) {
        this.tobuy.push(thing)
      }
    })

    this.tobuy.forEach((thing:Thing) => {
      this.overal += (thing.price * thing.qnt)
    })

  }

  cart(id: number) {
    stuffStore.manipulate(id)
  }

  // cartRemoveAll() {
  //   stuffStore.remove()
  // }

  cartClearChecks() {
    stuffStore.clearChecks()
  }

  get statusChanger() {
    return this.check
  }

  set statusChanger(val) {
    this.check = val
  }

}
</script>
<style lang="scss"></style>