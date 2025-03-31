"use client";

import { useEffect } from "react";

import { useScoreboardStore } from "@/stores/scoreboard-store";
import { useScoreStore } from "@/stores/score-store";

import { ScoreboardHeader } from "./scoreboard-header";
import { ScoreboardRow } from "./scoreboard-row";

export const ScoreboardGrid = () => {
  const frames = useScoreboardStore((s) => s.frames);
  const { player1Score, player2Score } = useScoreStore();

  useEffect(() => {
    console.log("player1Score", player1Score);
    console.log("player2Score", player2Score);
  }, [player1Score, player2Score]);

  return (
    <main className="min-h-[100dvh]">
      <div className="max-w-md border border-dashed border-gray-700 border-t-0 mx-auto">
        <ScoreboardHeader />
        {[...Array(frames).keys()].map((_, i) => (
          <ScoreboardRow frame={i} key={i} />
        ))}
      </div>
    </main>
  );
};
ScoreboardGrid.displayName = "ScoreboardGrid";
