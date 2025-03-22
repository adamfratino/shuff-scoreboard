import { create } from "zustand";

export interface ScoreboardState {
  frames: number;
  setFrames: (frames: number) => void;
  player1Score: number;
  player2Score: number;
  setPlayerScore: (player: 1 | 2, score: number) => void;
}

export const useScoreboardStore = create<ScoreboardState>()((set) => ({
  frames: 8,
  player1Score: 0,
  player2Score: 0,
  setFrames: (frames) => set({ frames }),
  setPlayerScore: (player: 1 | 2, score: number) => {
    if (player === 1) set({ player1Score: score });
    if (player === 2) set({ player2Score: score });
  },
}));
