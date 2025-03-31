"use client";

import { DEFAULT_PLAYER_SCORE, SCORE_PLAINTEXT } from "@/constants";
import type { ScorePlaintext } from "@/types";

import { useSetScoreStore } from "@/stores/set-score-store";

import { ScoreIterator } from "./subcomponents";
import { DrawerWrapper } from "./subcomponents/drawer-wrapper";
import { useScoreStore } from "@/stores/score-store";

export const ScoreboardDrawer = () => {
  const { currentFrame, p1ScoreObj, p2ScoreObj, setPlayerScoreObject } =
    useSetScoreStore();
  const { player1Score, player2Score } = useScoreStore();

  const handleIterate = (player: 1 | 2, score: { [score: number]: number }) => {
    const details = player === 1 ? p1ScoreObj : p2ScoreObj;
    setPlayerScoreObject(player, { ...details, ...score });
  };

  const p1Frame = Object.entries(player1Score).find(
    (fr) => Number(fr[0]) === currentFrame
  );

  const p2Frame = Object.entries(player2Score).find(
    (fr) => Number(fr[0]) === currentFrame
  );

  const p1Data = p1Frame ? p1Frame[1] : undefined;
  const p2Data = p2Frame ? p2Frame[1] : undefined;

  const getInitialCount = (player: 1 | 2, scoreType: string): number => {
    const playerData = player === 1 ? p1Data : p2Data;
    if (!playerData) return 0;
    return playerData[scoreType as keyof typeof playerData] || 0;
  };

  return (
    <DrawerWrapper>
      {[...Object.keys(DEFAULT_PLAYER_SCORE)]
        .sort((a, b) => {
          const order = ["10", "8", "7", "-10"];
          return order.indexOf(a) - order.indexOf(b);
        })
        .map((name) => (
          <div
            key={name}
            className="grid grid-cols-[4rem_1fr_1fr] items-center"
          >
            <span className="text-sm font-bold uppercase after:content-[':'] text-right">
              {SCORE_PLAINTEXT[name as keyof ScorePlaintext]}
            </span>

            <ScoreIterator
              initialValue={getInitialCount(1, name)}
              onPlus={(count) => handleIterate(1, { [name]: count })}
              onMinus={(count) => handleIterate(1, { [name]: count })}
            />

            <ScoreIterator
              initialValue={getInitialCount(2, name)}
              onPlus={(count) => handleIterate(2, { [name]: count })}
              onMinus={(count) => handleIterate(2, { [name]: count })}
            />
          </div>
        ))}
    </DrawerWrapper>
  );
};
ScoreboardDrawer.displayName = "ScoreboardDrawer";
