<template>
  <Transition name="notification">
    <div
      v-if="show"
      class="
        p-6
        bg-pink-custom
        rounded-2xl
        fixed
        bottom-[40px]
        right-[40px]
        opacity-100
        z-20
      "
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
