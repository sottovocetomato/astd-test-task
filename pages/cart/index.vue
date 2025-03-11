<template>
  <h2 class="mb-6">Корзина</h2>
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
    <CatalogItem v-for="product in cart" v-bind="product" :key="product.url">
      <template #controls>
        <BaseButton @click.prevent="onProductRemove(product)" variant="danger">
          Удалить
        </BaseButton>
      </template>
    </CatalogItem>
  </div>
  <BaseNotification>
    <span class="text-white">Товар удалён из корзины </span>
  </BaseNotification>
</template>

<script setup lang="ts">
import { useNotification } from "~/composables/useNotification";
import { useApplicationStore } from "~/store/application";
import BaseButton from "~/components/base/BaseButton.vue";
const { showNotification } = useNotification();
const store = useApplicationStore();
const { removeFromCart } = store;
const cart = computed(() => store.cart);

function onProductRemove(product) {
  removeFromCart(product);
  showNotification();
}
</script>

<style scoped></style>
