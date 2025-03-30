export type Score = {
  hero?: number;
  villain?: number;
};

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
