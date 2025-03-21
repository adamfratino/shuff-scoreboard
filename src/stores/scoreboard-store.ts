import { create } from "zustand";

export interface ScoreboardState {
  frames: number;
  setFrames: (frames: number) => void;
}

export const useScoreboardStore = create<ScoreboardState>()((set) => ({
  frames: 8,
  setFrames: (frames) => set({ frames }),
}));
