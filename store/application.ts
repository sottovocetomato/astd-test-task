import { defineStore } from "pinia";
import type { ExtendedProduct } from "~/components/catalog/Item.vue";

/**
 * Хранилище приложения для управления глобальными состояниями.
 */
export const useApplicationStore = defineStore("application", () => {
  const cart = ref([]);

  function addToCart(product: ExtendedProduct) {
    if (!product) {
      throw new Error("No product was provided");
    }
    if (product?.inCart === undefined) {
      throw new Error("Given argument is not type of Product");
    }
    product.inCart = true;
    cart.value.push(product);
  }
  function removeFromCart(product: ExtendedProduct) {
    if (!product) {
      throw new Error("No product was provided");
    }
    if (product?.inCart === undefined) {
      throw new Error("Given argument is not type of Product");
    }
    product.inCart = false;
    cart.value = cart.value.filter((c) => c.url !== product.url);
  }

  return {
    cart,
    addToCart,
    removeFromCart,
  };
});
