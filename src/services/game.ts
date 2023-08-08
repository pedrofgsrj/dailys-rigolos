import dailys from "@/assets/dailys.json";
import { Daily } from "@/interfaces/daily";

export const getRandomDaily = (): Daily => {
  return dailys[Math.floor(Math.random() * dailys.length)];
};
