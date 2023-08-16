<template>
  <main class="p-8">
    <router-link
      type="button"
      :to="{ name: 'randomDaily' }"
      class="block mx-auto mb-8 py-2 px-6 w-fit border-2 border-solid rounded-lg text-white font-title"
    >
      Piocher une carte
    </router-link>
    <div class="flex items-center justify-center">
      <DailyCard class="w-56 aspect-[16/23] -rotate-[20deg] origin-right z-10" />
      <DailyCard :mode="DailyCardMode.DEBRIEF" class="w-56 aspect-[16/23] rotate-[20deg] origin-left" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import DailyCard, { DailyCardMode } from "@/components/DailyCard.vue";
</script>
