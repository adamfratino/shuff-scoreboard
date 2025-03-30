export type PlayerProfile = {
  id: number;
  name: string;
  location?: string;
  age?: number;
  gender?: string;
};

export type PlayerStats = {
  rank?: number;
  wins?: number;
  losses?: number;
};

export type Player = PlayerProfile & PlayerStats;

export type ScoreDetails = {
  10: number;
  8: number;
  7: number;
  "-10": number;
  "-3"?: number;
};

export type ScorePlaintext = {
  [K in keyof ScoreDetails]: string;
};

export type FrameScore = {
  player1: ScoreDetails;
  player2: ScoreDetails;
};

export type MatchScore = {
  [frame: number]: FrameScore;
};
