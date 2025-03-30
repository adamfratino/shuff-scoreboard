import type { Player } from "./types";

export const PLAYER_1: Player = {
  id: 0,
  name: "Adam Fratino",
  rank: 1197,
  wins: 27,
  losses: 9,
  age: 41,
  location: "Brooklyn",
  gender: "M",
};

export const PLAYER_2: Player = {
  id: 1,
  name: "Jeff Ziev",
  location: "Brooklyn",
  rank: 1244,
  wins: 31,
  losses: 4,
};

export const PLAYERS = [PLAYER_1, PLAYER_2];
