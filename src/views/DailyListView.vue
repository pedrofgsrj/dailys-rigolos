<template>
  <nav class="font-title hover:underline">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
    </ul>
  </nav>
  <main class="p-8 space-y-10">
    <h1 class="text-3xl text-center font-title">Tous les dailys</h1>
    <ul class="space-y-20">
      <li v-for="daily in dailys" :key="daily.number" class="grid grid-cols-[repeat(2,auto)] gap-10 justify-center">
        <DailyCard :daily="daily" face-up :mode="DailyCardMode.FORMAT_INTENTION" class="w-60 aspect-[16/23]" />
        <DailyCard :daily="daily" face-up :mode="DailyCardMode.DEBRIEF" class="w-60 aspect-[16/23]" />
      </li>
    </ul>
  </main>
</template>

<script lang="ts" setup>
import DailyCard, { DailyCardMode } from "@/components/DailyCard.vue";
import dailys from "@/assets/dailys.json";
</script>
