import { create } from "zustand";

import type { MatchScore, FrameScore } from "@/types";

export interface ScoreState {
  player1Score: MatchScore;
  player2Score: MatchScore;
  setPlayerScore: (player: 1 | 2, score: MatchScore) => void;
  /** frame to score */
  frame: number;
  setFrame: (frame: number) => void;
}

export const useScoreStore = create<ScoreState>()((set) => ({
  frame: 1,
  setFrame: (frame: number) => set({ frame }),
  player1Score: [],
  player2Score: [],
  setPlayerScore: (player: 1 | 2, score: MatchScore) => {
    if (player === 1) set({ player1Score: score });
    if (player === 2) set({ player2Score: score });
  },
}));
