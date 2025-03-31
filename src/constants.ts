import type { ScoreDetails, ScorePlaintext } from "./types";

export const HAMMER_PATTERN = [1, 0, 0, 1];

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
