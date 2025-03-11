<template>
  <!--  <div class="flex items-center justify-center h-screen text-center ">-->
  <!--    <div>-->
  <!--      <div class="mb-8 font-bold text-3xl flex items-center justify-center">-->
  <!--        <Icon name="material-symbols:shopping-basket-outline" class="mr-4 text-pink-600" /> {{ welcome }}-->
  <!--      </div>-->
  <!--      <div class="text-2xl ">-->
  <!--        {{ believe }}-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
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
import { useApplicationStore } from "~/store/application";
import { apiPath } from "~/utils/api";

const { welcome } = useApplicationStore();

const { believe } = await $fetch(apiPath.hello);

function errorLogger(error: unknown): any {
  console.error(error, "Some error has occured on app level");
}
</script>
