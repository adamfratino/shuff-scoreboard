import { create } from "zustand";

import type { PlayerScore } from "@/types";

export interface ScoreState {
  player1Score: PlayerScore;
  player2Score: PlayerScore;
  setPlayerScore: (player: 1 | 2, score: PlayerScore) => void;
}

export const useScoreStore = create<ScoreState>()((set) => ({
  player1Score: [],
  player2Score: [],
  setPlayerScore: (player: 1 | 2, score: PlayerScore) => {
    if (player === 1) set({ player1Score: score });
    if (player === 2) set({ player2Score: score });
  },
}));
