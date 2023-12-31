<template>
  <div :style="{ '--card-color': modeColorMap[mode] }" class="grid p-2 bg-[var(--card-color)] rounded-[14px] shadow-lg">
    <div class="p-2 rounded-md bg-white text-xs text-theme-gray tracking-wide">
      <div v-if="daily && faceUp" class="space-y-3">
        <h2 class="flex items-center gap-3 font-title">
          <span class="flex-shrink-0 text-2xl text-[var(--card-color)] font-black">
            {{ daily.number }}
          </span>
          <span
            class="flex-grow py-2 px-3 bg-[var(--card-color)] rounded-full text-white text-sm font-bold uppercase tracking-tight leading-none whitespace-nowrap"
          >
            {{ daily.title }}
          </span>
        </h2>

        <!-- Format/intention -->
        <template v-if="mode === DailyCardMode.FORMAT_INTENTION">
          <h3
            class="font-title font-bold uppercase after:block after:mt-1 after:w-12 after:h-2 after:bg-[var(--card-color)] after:rounded-full"
          >
            Format
          </h3>
          <p class="whitespace-pre-wrap">{{ daily.format }}</p>

          <h3
            class="font-title font-bold uppercase after:block after:mt-1 after:w-12 after:h-2 after:bg-[var(--card-color)] after:rounded-full"
          >
            Intention
          </h3>
          <p class="whitespace-pre-wrap">{{ daily.intention }}</p>
        </template>

        <!-- Debrief -->
        <template v-if="mode === DailyCardMode.DEBRIEF">
          <h3
            class="font-title font-bold uppercase after:block after:mt-1 after:w-12 after:h-2 after:bg-[var(--card-color)] after:rounded-full"
          >
            Debrief
          </h3>
          <p class="whitespace-pre-wrap">{{ daily.debrief }}</p>
        </template>
      </div>

      <div v-else class="flex flex-col items-center gap-y-5 font-title font-bold uppercase text-center">
        <ConsertoLogoColor class="w-24 drop-shadow" aria-hidden="true" />
        <h2 class="mb-2 text-3xl text-[var(--card-color)] leading-none">Les Dailys Rigolos</h2>
        <span class="p-2 w-full bg-[var(--card-color)] rounded-full text-white text-sm">{{ modeNameMap[mode] }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export enum DailyCardMode {
  FORMAT_INTENTION = "FORMAT_INTENTION",
  DEBRIEF = "DEBRIEF",
}
</script>

<script setup lang="ts">
import { Daily } from "@/interfaces/daily";
import ConsertoLogoColor from "@/assets/conserto-macaron.svg";

interface Props {
  daily?: Daily | null;
  mode?: DailyCardMode;
  faceUp?: boolean;
}

withDefaults(defineProps<Props>(), {
  daily: null,
  mode: DailyCardMode.FORMAT_INTENTION,
  faceUp: false,
});

const modeNameMap = {
  [DailyCardMode.FORMAT_INTENTION]: "Format & Intention",
  [DailyCardMode.DEBRIEF]: "Debrief",
};

const rootStyle = getComputedStyle(document.documentElement);

const modeColorMap = {
  [DailyCardMode.FORMAT_INTENTION]: `rgb(${rootStyle.getPropertyValue("--color-theme-yellow")})`,
  [DailyCardMode.DEBRIEF]: `rgb(${rootStyle.getPropertyValue("--color-theme-pink")})`,
};
</script>
