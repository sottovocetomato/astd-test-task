<template>
  <header
    class="
      bg-white
      h-[92px]
      shadow-xl
      sticky
      flex
      justify-between
      items-center
      xl:pr-[242px] xl:pl-10
      sm:pr-4 sm:pl-4
      top-0
      z-20
    "
  >
    <NuxtLink to="/"><h2>Brand Name</h2></NuxtLink>
    <div class="flex justify-between items-center">
      <Icon
        name="material-symbols:shopping-basket-outline"
        size="32px"
        class="mr-2"
      />
      <span class="min-w-24 text-right">{{ itemsInCart }} товаров</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useApplicationStore } from "~/store/application";

const store = useApplicationStore();

const itemsInCart = computed(() => store.cart.length);
</script>

<style scoped></style>
