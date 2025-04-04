"use client";

import { useEffect } from "react";

import {
  DEFAULT_PLAYER_SCORE,
  SCORE_PLAINTEXT,
  COUNTED_SCORE_TYPES,
  SCORE_DISPLAY_ORDER,
} from "@/constants";

import { useSetScoreStore } from "@/stores/set-score-store";
import { useScoreStore } from "@/stores/score-store";

import type { ScorePlaintext } from "@/types";

import { calculateFrameTotalScore } from "@/utils";

import { DrawerWrapper, ScoreIterator, ScoreTotals } from "./subcomponents";

export const ScoreboardDrawer = () => {
  const currentFrame = useSetScoreStore((s) => s.currentFrame);
  const open = useSetScoreStore((s) => s.open);

  const {
    p1ScoreObj,
    p2ScoreObj,
    setPlayerScoreObject,
    resetScores,
    setPlayerTotalScore,
  } = useSetScoreStore();

  const { player1Score, player2Score } = useScoreStore();

  const p1Frame = Object.entries(player1Score).find(
    (fr) => Number(fr[0]) === currentFrame
  );

  const p2Frame = Object.entries(player2Score).find(
    (fr) => Number(fr[0]) === currentFrame
  );

  const p1Data = p1Frame ? p1Frame[1] : undefined;
  const p2Data = p2Frame ? p2Frame[1] : undefined;

  const getPlayerTotalShots = (playerObj: any) => {
    if (!playerObj) return 0;

    return COUNTED_SCORE_TYPES.reduce((total, scoreType) => {
      return total + (playerObj[scoreType] || 0);
    }, 0);
  };

  const p1TotalShots = getPlayerTotalShots(p1ScoreObj);
  const p2TotalShots = getPlayerTotalShots(p2ScoreObj);

  const getInitialCount = (player: 1 | 2, scoreType: string): number => {
    const playerData = player === 1 ? p1Data : p2Data;
    if (!playerData) return 0;
    return playerData[scoreType as keyof typeof playerData] || 0;
  };

  const handleIterate = (player: 1 | 2, score: { [score: number]: number }) => {
    const details = player === 1 ? p1ScoreObj : p2ScoreObj;
    setPlayerScoreObject(player, { ...details, ...score });

    if (player === 1) {
      const newTotal = calculateFrameTotalScore({ ...p1ScoreObj, ...score });
      setPlayerTotalScore(1, newTotal);
    } else {
      const newTotal = calculateFrameTotalScore({ ...p2ScoreObj, ...score });
      setPlayerTotalScore(2, newTotal);
    }
  };

  const shouldDisableIterator = (
    player: 1 | 2,
    scoreType: string,
    count: number
  ) => {
    const totalShots = player === 1 ? p1TotalShots : p2TotalShots;
    if (!COUNTED_SCORE_TYPES.includes(scoreType)) return false;
    return count >= 4 || totalShots >= 4;
  };

  // Effect to initialize the drawer when it opens or frame changes
  useEffect(() => {
    resetScores();

    if (p1Data) {
      setPlayerScoreObject(1, p1Data);
      setPlayerTotalScore(1, calculateFrameTotalScore(p1Data));
    } else {
      setPlayerTotalScore(1, 0);
    }

    if (p2Data) {
      setPlayerScoreObject(2, p2Data);
      setPlayerTotalScore(2, calculateFrameTotalScore(p2Data));
    } else {
      setPlayerTotalScore(2, 0);
    }
  }, [
    currentFrame,
    open,
    p1Data,
    p2Data,
    resetScores,
    setPlayerScoreObject,
    setPlayerTotalScore,
  ]);

  return (
    <DrawerWrapper>
      <ScoreTotals
        p1Score={calculateFrameTotalScore(p1ScoreObj)}
        p2Score={calculateFrameTotalScore(p2ScoreObj)}
      />
      {[...Object.keys(DEFAULT_PLAYER_SCORE)]
        .sort((a, b) => {
          const order = SCORE_DISPLAY_ORDER;
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
              plusDisabled={shouldDisableIterator(1, name, p1TotalShots)}
            />

            <ScoreIterator
              initialValue={getInitialCount(2, name)}
              onPlus={(count) => handleIterate(2, { [name]: count })}
              onMinus={(count) => handleIterate(2, { [name]: count })}
              plusDisabled={shouldDisableIterator(2, name, p2TotalShots)}
            />
          </div>
        ))}
    </DrawerWrapper>
  );
};
ScoreboardDrawer.displayName = "ScoreboardDrawer";
