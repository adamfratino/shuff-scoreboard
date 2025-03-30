import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ScoreDetails } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateTotalScore = (scoreObj: ScoreDetails): number => {
  return Object.entries(scoreObj).reduce((total, [key, count]) => {
    // Convert the key to a number and multiply by the count
    return total + Number(key) * count;
  }, 0);
};
