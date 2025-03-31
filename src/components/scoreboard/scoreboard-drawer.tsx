"use client";

import { useEffect } from "react";

import { DEFAULT_PLAYER_SCORE, SCORE_PLAINTEXT } from "@/constants";
import type { ScorePlaintext } from "@/types";

import { useSetScoreStore } from "@/stores/set-score-store";

import { ScoreIterator } from "./subcomponents";
import { DrawerWrapper } from "./subcomponents/drawer-wrapper";

export const ScoreboardDrawer = () => {
  const { p1ScoreObj, p2ScoreObj, setPlayerScoreObject } = useSetScoreStore();

  const handleIterate = (player: 1 | 2, score: { [score: number]: number }) => {
    const details = player === 1 ? p1ScoreObj : p2ScoreObj;
    setPlayerScoreObject(player, { ...details, ...score });
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
              onPlus={(count) => handleIterate(1, { [name]: count })}
              onMinus={(count) => handleIterate(1, { [name]: count })}
            />

            <ScoreIterator
              onPlus={(count) => handleIterate(2, { [name]: count })}
              onMinus={(count) => handleIterate(2, { [name]: count })}
            />
          </div>
        ))}
    </DrawerWrapper>
  );
};
ScoreboardDrawer.displayName = "ScoreboardDrawer";
