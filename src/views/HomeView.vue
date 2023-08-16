<template>
  <main class="p-8">
    <template v-if="!selectedCard">
      <button
        type="button"
        @click="pickCard"
        class="block mx-auto mb-8 py-2 px-6 border-2 border-solid rounded-lg text-white font-title"
      >
        Piocher une carte
      </button>
      <div class="flex items-center justify-center">
        <DailyCard class="w-56 aspect-[16/23] -rotate-[20deg] origin-right z-10" />
        <DailyCard :mode="DailyCardMode.DEBRIEF" class="w-56 aspect-[16/23] rotate-[20deg] origin-left" />
      </div>
    </template>
    <template v-else>
      <div class="grid grid-cols-2 items-center justify-items-center gap-4">
        <DailyCard :daily="selectedCard" :face-up="!!selectedCard" class="w-60 aspect-[16/23]" />

        <button v-if="!showDebrief" type="button" @click="showDebrief = true">Afficher le debrief</button>
        <DailyCard v-else :daily="selectedCard" face-up :mode="DailyCardMode.DEBRIEF" class="w-60 aspect-[16/23]" />
      </div>

      <button type="button" @click="reset">Reset</button>
    </template>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Daily } from "@/interfaces/daily";
import DailyCard, { DailyCardMode } from "@/components/DailyCard.vue";
import dailys from "@/assets/dailys.json";

const selectedCard = ref<Daily | null>(null);
const showDebrief = ref<boolean>(false);

const pickCard = () => {
  const randomIndex = Math.floor(Math.random() * dailys.length);
  selectedCard.value = dailys[randomIndex];
};

const reset = () => {
  selectedCard.value = null;
  showDebrief.value = false;
};
</script>
