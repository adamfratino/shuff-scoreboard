export type Frame = number;
export type Position = 0 | 1;

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

export type PlayerScore = {
  [frame: Frame]: ScoreDetails;
};

export type ScorePlaintext = {
  [K in keyof ScoreDetails]: string;
};
