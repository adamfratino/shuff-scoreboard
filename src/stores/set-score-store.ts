import { create } from "zustand";

import { DEFAULT_PLAYER_SCORE } from "@/constants";
import { calculateFrameTotalScore } from "@/utils";
import type { ScoreDetails } from "@/types";

export interface SetScoreState {
  /** drawer visibility */
  open: boolean;
  setOpen: (open: boolean) => void;

  /** current frame to score */
  currentFrame: number;
  setCurrentFrame: (currentFrame: number) => void;

  /** detailed object of player score */
  p1ScoreObj: ScoreDetails;
  p2ScoreObj: ScoreDetails;
  setPlayerScoreObject: (player: 1 | 2, score: ScoreDetails) => void;

  /** simple total of player score */
  p1TotalScore: number;
  p2TotalScore: number;
  setPlayerTotalScore: (player: 1 | 2, score: number) => void;

  resetScores: () => void;
}

export const useSetScoreStore = create<SetScoreState>()((set, get) => ({
  open: false,
  setOpen: (open) => set({ open: open }),

  currentFrame: 0,
  setCurrentFrame: (currentFrame: number) => set({ currentFrame }),

  p1ScoreObj: DEFAULT_PLAYER_SCORE,
  p2ScoreObj: DEFAULT_PLAYER_SCORE,
  setPlayerScoreObject: (player: 1 | 2, score: ScoreDetails) => {
    // Update the score object
    if (player === 1) set({ p1ScoreObj: score });
    if (player === 2) set({ p2ScoreObj: score });

    // Calculate and update the total score
    const store = get();
    const totalScore = calculateFrameTotalScore(
      player === 1 ? score : store.p2ScoreObj
    );
    if (player === 1) set({ p1TotalScore: totalScore });
    if (player === 2) set({ p2TotalScore: calculateFrameTotalScore(score) });
  },

  p1TotalScore: 0,
  p2TotalScore: 0,
  setPlayerTotalScore: (player: 1 | 2, score: number) => {
    if (player === 1) set({ p1TotalScore: score });
    if (player === 2) set({ p2TotalScore: score });
  },

  resetScores: () =>
    set({
      p1ScoreObj: DEFAULT_PLAYER_SCORE,
      p2ScoreObj: DEFAULT_PLAYER_SCORE,
      p1TotalScore: 0,
      p2TotalScore: 0,
    }),
}));
