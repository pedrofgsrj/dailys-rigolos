<template>
  <main class="p-8">
    <div class="grid grid-cols-[auto_auto] items-center justify-center gap-20">
      <DailyCard :daily="selectedCard" :face-up="!!selectedCard" class="w-60 aspect-[16/23]" />

      <DailyCard
        :daily="selectedCard"
        :face-up="showDebrief"
        :mode="DailyCardMode.DEBRIEF"
        class="w-60 aspect-[16/23]"
        :class="{ 'cursor-pointer': !showDebrief }"
        @click="showDebrief = true"
      />
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
