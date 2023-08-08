<template>
  <main class="p-8">
    <button type="button" @click="pickCard">Piocher une carte</button>
    <DailyCard v-if="selectedCard" :daily="selectedCard" :face-up="!!selectedCard" class="w-60 aspect-[16/23]" />
  </main>
</template>

<script lang="ts" setup>
import { getRandomDaily } from "@/services/game.ts";
import { ref } from "vue";
import { Daily } from "@/interfaces/daily";
import DailyCard from "@/components/DailyCard.vue";

const selectedCard = ref<Daily | null>(null);

const pickCard = () => {
  selectedCard.value = getRandomDaily();
};
</script>
