import { create } from "zustand";

import { PLAYERS } from "@/MOCK_DATA";

import type { Player } from "@/types";

export interface PlayersState {
  player1: Player;
  setPlayer1: (player: Player) => void;
  player2: Player;
  setPlayer2: (player: Player) => void;
}

export const usePlayersStore = create<PlayersState>()((set) => ({
  player1: PLAYERS[0],
  setPlayer1: (player1) => set({ player1 }),
  player2: PLAYERS[1],
  setPlayer2: (player1) => set({ player1 }),
}));
