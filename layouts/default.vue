<template>
  <div class="flex flex-col items-between justify-between min-h-dvh h-full">
    <BaseHeader />
    <div class="px-10 py-8 w-full h-full flex flex-col flex-1">
      <slot />
    </div>
    <BaseFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
