<template>
  <main class="p-8">
    <DailyCard :daily="dailyList[0]" class="w-60 aspect-[16/23]" />
  </main>
</template>

<script lang="ts" setup>
import dailys from "@/assets/dailys.json";
import { ref } from "vue";
import { Daily } from "@/interfaces/daily";
import DailyCard from "@/components/DailyCard.vue";

const dailyList = ref<Daily[]>(dailys);
</script>
