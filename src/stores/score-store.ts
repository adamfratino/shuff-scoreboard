import { create } from "zustand";
import type { PlayerScore } from "@/types";

export interface ScoreState {
  player1Score: PlayerScore;
  player2Score: PlayerScore;
  setPlayerScore: (player: 1 | 2, score: PlayerScore) => void;
  isFrameScored: (frameNumber: number) => boolean;
}

export const useScoreStore = create<ScoreState>()((set, get) => ({
  player1Score: [],
  player2Score: [],

  setPlayerScore: (player: 1 | 2, score: PlayerScore) => {
    if (player === 1) set({ player1Score: score });
    if (player === 2) set({ player2Score: score });
  },

  isFrameScored: (frameNumber: number) => {
    const { player1Score, player2Score } = get();

    const frameExistsInP1 = Object.keys(player1Score).includes(
      String(frameNumber)
    );
    const frameExistsInP2 = Object.keys(player2Score).includes(
      String(frameNumber)
    );

    return frameExistsInP1 || frameExistsInP2;
  },
}));
