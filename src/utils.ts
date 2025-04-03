import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { POSITIVE_SCORES } from "./constants";

import type { ScoreDetails } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateFrameTotalScore = (scoreObj: ScoreDetails): number => {
  return Object.entries(scoreObj).reduce((total, [key, count]) => {
    // Convert the key to a number and multiply by the count
    return total + Number(key) * count;
  }, 0);
};

export const calculateMatchTotalScore = (
  matchScore: { [frame: number]: ScoreDetails },
  frameLimit?: number
): number => {
  // Get the frame numbers as integers
  const frameNumbers = Object.keys(matchScore).map(Number);

  // If there are no frames, return 0
  if (frameNumbers.length === 0) return 0;

  // Sort the frame numbers to ensure we process them in order
  frameNumbers.sort((a, b) => a - b);

  // If frameLimit is provided, only use frames up to that limit
  const framesToCount = frameLimit
    ? frameNumbers.filter((frame) => frame <= frameLimit)
    : frameNumbers;

  // Calculate the sum of all included frames
  return framesToCount.reduce((total, frameNumber) => {
    const frameScore = matchScore[frameNumber];
    return total + calculateFrameTotalScore(frameScore);
  }, 0);
};

export const sumPositiveScoreCounts = (obj?: ScoreDetails): number => {
  if (!obj) return 0;

  let sum = 0;

  for (const key of POSITIVE_SCORES) {
    sum += obj[key] || 0;
  }

  return sum;
};
