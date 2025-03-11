<template>
  <header
    class="
      bg-white
      h-[92px]
      shadow-custom
      sticky
      flex
      justify-between
      items-center
      lg:pr-[242px] lg:pl-10
      pr-4
      pl-4
      top-0
      z-20
    "
  >
    <NuxtLink to="/"><h2>Brand Name</h2></NuxtLink>
    <NuxtLink
      class="flex justify-between items-center hover:opacity-50"
      to="/cart"
    >
      <Icon
        name="material-symbols:shopping-basket-outline"
        size="32px"
        class="mr-2"
      />
      <span class="min-w-24 text-right">{{ itemsInCart }} товаров</span>
    </NuxtLink>
  </header>
</template>

<script setup lang="ts">
import { useApplicationStore } from "~/store/application";

const store = useApplicationStore();

const itemsInCart = computed(() => store.cart.length);
</script>

<style scoped></style>
