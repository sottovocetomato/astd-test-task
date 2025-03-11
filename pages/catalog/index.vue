<template>
  <h2 class="mb-6">Каталог товаров</h2>
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
    >
      <template #controls v-if="product.inCart">
        <BaseButton @click.prevent="onProductRemove(product)" variant="danger">
          Удалить
        </BaseButton>
      </template>
    </CatalogItem>
  </div>
  <BaseNotification>
    <div v-if="variant === 'primary'">
      <span class="text-white"
        >Товар добавлен в
        <NuxtLink to="/cart" class="underline underline-offset-2"
          >корзину</NuxtLink
        >
      </span>
    </div>
    <div v-else>
      <span class="text-white"
        >Товар удалён из
        <NuxtLink to="/cart" class="underline underline-offset-2"
          >корзины</NuxtLink
        >
      </span>
    </div>
  </BaseNotification>
</template>

<script setup lang="ts">
import { apiPath } from "~/utils/api";
import { useApplicationStore } from "~/store/application";
import { useNotification } from "~/composables/useNotification";
import BaseButton from "~/components/base/BaseButton.vue";

const store = useApplicationStore();
const { addToCart, removeFromCart } = store;
const nuxtApp = useNuxtApp();
const { showNotification, variant } = useNotification();

const { data, error } = await useFetch(`${apiPath.catalog}/cosmetics`, {
  transform(resp) {
    resp.products = resp?.products?.map((p) => ({ ...p, inCart: false }));
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

function onProductAdd(product) {
  addToCart(product);
  showNotification("primary");
}
function onProductRemove(product) {
  removeFromCart(product);
  showNotification("danger");
}
</script>

<style scoped></style>
