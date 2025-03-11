import { defineStore } from "pinia";
import type { Product } from "#build/utils/generate";

/**
 * Хранилище приложения для управления глобальными состояниями.
 */
export const useApplicationStore = defineStore("application", () => {
  const cart = ref([]);

  function addToCart(product: Product) {
    cart.value.push(product);
  }
  function removeFromCart(link: string) {
    cart.value = cart.value.filter((c) => c.url !== link);
  }

  return {
    cart,
    addToCart,
    removeFromCart,
  };
});
