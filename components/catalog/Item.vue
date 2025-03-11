<template>
  <NuxtLink
    :to="url"
    class="
      w-item-card-width
      h-item-card-height
      flex flex-col
      justify-between
      items-start
      relative
      group
      hover:cursor-pointer
    "
  >
    <div class="z-10 group-hover:z-12">
      <div class="relative w-item-card-width aspect-square">
        <img
          :src="image || 'https://fakeimg.pl/600x400'"
          class="w-full h-full rounded-xl object-cover"
        >
        <div
          v-if="cuttedPrice"
          class="
            absolute
            rounded-sm
            h-[20px]
            w-[40px]
            bottom-[6px]
            left-[6px]
            bg-white
            flex
            items-center
            justify-center
          "
        >
          <span class="text-pink-custom text-xs">{{ cuttedPrice }}%</span>
        </div>
      </div>
      <div class="mt-3">
        <span class="font-golos font-bold mr-2">{{
          currencyFormat(newPrice)
        }}</span>
        <span
          v-if="oldPrice"
          class="line-through text-text-striked text-xs"
        >{{
          currencyFormat(oldPrice)
        }}</span>
      </div>
      <p class="font-golos font-semibold text-xs">{{ brand }}</p>
      <p class="font-golos line-clamp-2 text-sm">
        {{ name }}
      </p>
    </div>
    <div
      class="
        absolute
        w-item-card-width-hovered
        h-item-card-height-hovered
        flex flex-col
        justify-end
        items-start
        shadow-custom
        opacity-0
        top:0
        translate-[-24px]
        left:0
        rounded-2xl
        p-6
        bg-white
        transition-opacity
        duration-200
        group-hover:opacity-100
        hover:cursor-pointer
        z-9
        group-hover:z-11
      "
    >
      <slot name="controls">
        <BaseButton @click.prevent="addProductToCart"> В корзину </BaseButton>
      </slot>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from '~/utils/generate'
import BaseButton from '~/components/base/BaseButton.vue'

const emits = defineEmits<{
  addToCart: [e: Event]
}>()

export interface ExtendedProduct extends Product {
  inCart: boolean
}

const {
  image = '',
  newPrice = 0,
  oldPrice = 0,
  brand = '',
  name = '',
  url = '',
} = defineProps<ExtendedProduct>()

const cuttedPrice = computed<number | null>(() => {
  if (oldPrice && newPrice < oldPrice) {
    const priceDiff = newPrice - oldPrice
    return Math.round((priceDiff * 100) / oldPrice)
  }
  return null
})

function addProductToCart(e: Event) {
  emits('addToCart', e)
}
</script>

<style scoped></style>
