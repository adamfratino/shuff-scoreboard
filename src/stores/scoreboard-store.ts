import { create } from "zustand";

import { DEFAULT_FRAMES } from "@/constants";

export interface ScoreboardState {
  frames: number;
  setFrames: (frames: number) => void;
  switchSides: boolean;
  setSwitchSides: (switchSides: boolean) => void;
  switchFrame: number | undefined;
  getSwitchFrame: () => number | undefined;
}

export const useScoreboardStore = create<ScoreboardState>()((set, get) => ({
  frames: DEFAULT_FRAMES,
  switchSides: true,
  switchFrame: DEFAULT_FRAMES / 2,

  setFrames: (frames) =>
    set({
      frames,
      switchFrame: get().switchSides ? Math.ceil(frames / 2) : undefined,
    }),

  setSwitchSides: (switchSides) =>
    set({
      switchSides,
      switchFrame: switchSides ? Math.ceil(get().frames / 2) : undefined,
    }),

  getSwitchFrame: () =>
    get().switchSides ? Math.ceil(get().frames / 2) : undefined,
}));
