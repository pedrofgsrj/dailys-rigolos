<template>
  <main class="p-8">
    <div class="grid grid-cols-2 items-center justify-items-center gap-4">
      <DailyCard :daily="selectedCard" :face-up="!!selectedCard" class="w-60 aspect-[16/23]" />

      <button v-if="!showDebrief" type="button" @click="showDebrief = true">Afficher le debrief</button>
      <DailyCard v-else :daily="selectedCard" face-up :mode="DailyCardMode.DEBRIEF" class="w-60 aspect-[16/23]" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Daily } from "@/interfaces/daily";
import DailyCard, { DailyCardMode } from "@/components/DailyCard.vue";
import dailys from "@/assets/dailys.json";

const selectedCard = ref<Daily | null>(null);
const showDebrief = ref<boolean>(false);

onMounted(() => {
  selectedCard.value = getRandomCard();
});

const getRandomCard = () => {
  const randomIndex = Math.floor(Math.random() * dailys.length);
  return dailys[randomIndex];
};
</script>
