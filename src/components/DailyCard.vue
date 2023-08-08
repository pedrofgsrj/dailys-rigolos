<template>
  <div
    class="p-3 m-2 space-y-3 rounded-md relative bg-white text-xs tracking-wide before:bg-theme-yellow before:rounded-[14px] before:-inset-2 before:absolute before:-z-10"
  >
    <template v-if="faceUp">
      <h2 class="flex items-center gap-3 font-title">
        <span class="flex-shrink-0 text-2xl text-theme-yellow font-black">
          {{ daily.number }}
        </span>
        <span
          class="flex-grow py-2 px-3 bg-theme-yellow rounded-full text-white text-base font-bold uppercase tracking-tight leading-none whitespace-nowrap"
        >
          {{ daily.title }}
        </span>
      </h2>

      <h3
        class="font-title font-bold uppercase after:block after:mt-1 after:w-12 after:h-2 after:bg-theme-yellow after:rounded-full"
      >
        Format
      </h3>
      <p class="whitespace-pre-wrap">{{ daily.format }}</p>

      <h3
        class="font-title font-bold uppercase after:block after:mt-1 after:w-12 after:h-2 after:bg-theme-yellow after:rounded-full"
      >
        Intention
      </h3>
      <p class="whitespace-pre-wrap">{{ daily.intention }}</p>
    </template>

    <div v-else class="flex flex-col items-center gap-y-5 font-title font-bold uppercase text-center">
      <ConsertoLogoColor class="w-24 drop-shadow" />
      <h2 class="mb-2 text-4xl text-theme-yellow leading-none">Les Dailys Rigolos</h2>
      <span class="p-2 w-full bg-theme-yellow rounded-full text-white text-sm">{{ modeNameMap[mode] }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Daily } from "@/interfaces/daily";
import ConsertoLogoColor from "@/assets/conserto-macaron.svg";

enum DailyCardMode {
  FORMAT_INTENTION = "FORMAT_INTENTION",
  DEBRIEF = "DEBRIEF",
}

interface Props {
  daily: Daily;
  mode?: DailyCardMode;
  faceUp?: boolean;
}

withDefaults(defineProps<Props>(), {
  mode: DailyCardMode.FORMAT_INTENTION,
  faceUp: false,
});

const modeNameMap = {
  [DailyCardMode.FORMAT_INTENTION]: "Format & Intention",
  [DailyCardMode.DEBRIEF]: "Debrief",
};
</script>
