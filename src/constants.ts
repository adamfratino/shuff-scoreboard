import type { ScoreDetails, ScorePlaintext } from "./types";

export const MAX_SHOTS_PER_FRAME = 4;

export const POSITIVE_SCORES = [10, 8, 7] as const;
/**
 * scoring types that count towards the max shots per frame count
 * */
export const COUNTED_SCORE_TYPES = ["10", "8", "7", "-10"];

/**
 * sets the vertical order of the score iterators in the scoring drawer
 * */
export const SCORE_DISPLAY_ORDER = ["10", "8", "7", "-10"];

export const DEFAULT_PLAYER_SCORE: ScoreDetails = {
  10: 0,
  8: 0,
  7: 0,
  "-10": 0,
};

export const SCORE_PLAINTEXT: ScorePlaintext = {
  10: "ten",
  8: "eight",
  7: "seven",
  "-10": "ten off",
};

export const HAMMER_PATTERN = [1, 0, 0, 1];

export const HAMMER_SEGMENTS = [
  { value: "", label: "No hammer" },
  { value: "hit", label: "Hit hammer" },
  { value: "miss", label: "Missed hammer" },
];
