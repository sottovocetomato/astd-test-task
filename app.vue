<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <NuxtErrorBoundary @error="errorLogger">
        <template #error="{ error }">
          <p>An error occurred: {{ error }}</p>
        </template>
        <NuxtPage />
      </NuxtErrorBoundary>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Test application",
  meta: [
    {
      name: "description",
      content: "This is my test application for AstDesign",
    },
  ],
});
function errorLogger(error: unknown): any {
  console.error(error, "Some error has occured on app level");
}
</script>
