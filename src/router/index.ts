import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DailyListView from "@/views/DailyListView.vue";
import RandomDailyView from "@/views/RandomDailyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/random",
      name: "randomDaily",
      component: RandomDailyView,
    },
    {
      path: "/list",
      name: "dailyList",
      component: DailyListView,
    },
  ],
});

export default router;
