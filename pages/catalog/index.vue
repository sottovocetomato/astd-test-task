<template>
  <h2 class="mb-6">Тестовая задача</h2>
  <div
    class="
      grid
      xl:grid-cols-6
      lg:grid-cols-4
      md:grid-cols-3
      sm:grid-cols-2
      xs:grid-cols-1
      gap-items-gap
    "
  >
    <CatalogItem
      v-for="product in data.products"
      v-bind="product"
      :key="product.url"
      @addToCart="onProductAdd(product)"
    ></CatalogItem>
  </div>
  <BaseNotification>
    <span class="text-white"
      >Товар добавлен в
      <NuxtLink to="/cart" class="underline underline-offset-2"
        >корзину</NuxtLink
      >
    </span>
  </BaseNotification>
</template>

<script setup lang="ts">
import { apiPath } from "~/utils/api";
import { useApplicationStore } from "~/store/application";
import { useNotification } from "~/composables/useNotification";

const store = useApplicationStore();
const { addToCart } = store;
const nuxtApp = useNuxtApp();
const { showNotification } = useNotification();

const { data, error } = await useFetch(`${apiPath.catalog}/cosmetics`, {
  transform(resp) {
    return {
      ...resp,
      fetchedAt: new Date(),
    };
  },
  getCachedData(key) {
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    if (!data) {
      return;
    }

    const expireAt = new Date(data.fetchedAt);
    expireAt.setTime(expireAt.getTime() + 600 * 1000);
    const expired = expireAt.getTime() < Date.now();
    if (expired) {
      return;
    }
    return data;
  },
});
console.log(data, "data");

function onProductAdd(product) {
  addToCart(product);
  showNotification();
}
</script>

<style scoped></style>
