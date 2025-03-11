<template>
  <Transition name="notification">
    <div
      class="
        p-6
        bg-pink-custom
        rounded-2xl
        absolute
        bottom-[132px]
        right-[40px]
        opacity-100
        z-20
      "
      v-if="show"
    >
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useNotification } from "~/composables/useNotification";
const { show } = useNotification();
</script>

<style scoped></style>
