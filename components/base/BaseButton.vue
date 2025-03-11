<template>
  <button
    v-if="variant === 'primary'"
    class="bg-black text-white rounded-lg py-2 px-5 mt-3 hover:bg-gray-800"
  >
    <slot />
  </button>
  <button
    v-else
    class="bg-red-600 text-white rounded-lg py-2 px-5 mt-3 hover:bg-red-500"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
export interface ButtonProps {
  variant: "primary" | "danger";
}

const { variant = "primary" } = defineProps<ButtonProps>();
</script>

<style scoped></style>
