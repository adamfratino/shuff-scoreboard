import { create } from "zustand";

import type { Player } from "../types";

export interface PlayerState {
  player1?: Player;
  setPlayer1: (player: Player) => void;
  player2?: Player;
  setPlayer2: (player: Player) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const usePlayerStore = create<PlayerState>()((set) => ({
  player1: { name: "Jeff Ziev", score: 0 },
  setPlayer1: (player1) => set({ player1 }),
  player2: { name: "Paul Assad", score: 0 },
  setPlayer2: (player1) => set({ player1 }),
  open: false,
  setOpen: (open) => set({ open: open }),
}));
