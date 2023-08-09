<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header class="flex items-center justify-between py-4 px-8">
    <router-link :to="{ name: 'home' }" class="font-title hover:underline">Home</router-link>
    <nav>
      <ul class="flex gap-10 font-title">
        <li>
          <a href="https://conserto.pro/blog/les-dailys-rigolos/" target="_blank" class="hover:underline"
            >C'est quoi ?</a
          >
        </li>
        <li>
          <router-link :to="{ name: 'dailyList' }" class="hover:underline">Tous les dailys</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>
