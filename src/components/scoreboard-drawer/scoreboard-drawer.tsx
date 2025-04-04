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
import { useScoreboardStore } from "@/stores/scoreboard-store";
import type { ScorePlaintext } from "@/types";
import { calculateFrameTotalScore, cn } from "@/utils";

import {
  DrawerWrapper,
  DrawerNames,
  ScoreIterator,
  ScoreTotals,
} from "./subcomponents";

/** @todo clean up, leverage hooks, etc. */
export const ScoreboardDrawer = () => {
  const {
    open,
    currentFrame: CURRENT_FRAME,
    p1ScoreObj,
    p2ScoreObj,
    setPlayerScoreObject,
    resetScores,
    setPlayerTotalScore,
  } = useSetScoreStore();

  const { player1Score, player2Score } = useScoreStore();

  const getSwitchFrame = useScoreboardStore((s) => s.getSwitchFrame);

  const SWITCH_ON_FRAME = getSwitchFrame();
  const shouldSwitchFrame = SWITCH_ON_FRAME
    ? CURRENT_FRAME > SWITCH_ON_FRAME
    : undefined;

  const p1Frame = Object.entries(player1Score).find(
    (fr) => Number(fr[0]) === CURRENT_FRAME
  );

  const p2Frame = Object.entries(player2Score).find(
    (fr) => Number(fr[0]) === CURRENT_FRAME
  );

  const p1Data = p1Frame ? p1Frame[1] : undefined;
  const p2Data = p2Frame ? p2Frame[1] : undefined;

  /** @todo fix `any` */
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
    CURRENT_FRAME,
    open,
    p1Data,
    p2Data,
    resetScores,
    setPlayerScoreObject,
    setPlayerTotalScore,
  ]);

  return (
    <DrawerWrapper>
      <DrawerNames reverse={shouldSwitchFrame} />
      <ScoreTotals
        reverse={shouldSwitchFrame}
        p1Score={calculateFrameTotalScore(p1ScoreObj)}
        p2Score={calculateFrameTotalScore(p2ScoreObj)}
      />
      {[...Object.keys(DEFAULT_PLAYER_SCORE)]
        .sort((a, b) => {
          return (
            SCORE_DISPLAY_ORDER.indexOf(a) - SCORE_DISPLAY_ORDER.indexOf(b)
          );
        })
        .map((name) => (
          <div key={name} className="grid grid-cols-[4rem_1fr] items-center">
            <span className="text-sm font-bold uppercase after:content-[':'] text-right">
              {SCORE_PLAINTEXT[name as keyof ScorePlaintext]}
            </span>

            <div
              className={cn("flex [&>*]:flex-1", {
                "flex-row-reverse": shouldSwitchFrame,
              })}
            >
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
          </div>
        ))}
    </DrawerWrapper>
  );
};
ScoreboardDrawer.displayName = "ScoreboardDrawer";
