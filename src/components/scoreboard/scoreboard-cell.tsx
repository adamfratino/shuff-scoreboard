"use client";

import { Hammer } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useScoreStore } from "@/stores/score-store";
import { useSetScoreStore } from "@/stores/set-score-store";

import {
  calculateFrameTotalScore,
  calculateMatchTotalScore,
  cn,
} from "@/utils";

export type ScoreboardCellProps = {
  frame: number;
  position: 0 | 1;
  score?: number;
  hammer?: boolean;
};

export const ScoreboardCell = ({
  hammer,
  position,
  frame,
}: ScoreboardCellProps) => {
  const player1Score = useScoreStore((s) => s.player1Score);
  const player2Score = useScoreStore((s) => s.player2Score);

  const setOpen = useSetScoreStore((s) => s.setOpen);
  const setCurrentFrame = useSetScoreStore((s) => s.setCurrentFrame);

  const scoresArr = [player1Score, player2Score];
  const scoreObj = Object.entries(scoresArr[position]).find(
    (fr) => Number(fr[0]) === frame
  );
  const frameScore = scoreObj
    ? calculateFrameTotalScore(scoreObj[1])
    : undefined;
  const totalScore = calculateMatchTotalScore(scoresArr[position], frame);

  const handleClick = () => {
    setOpen(true);
    setCurrentFrame(frame);
  };

  return (
    <div className="relative aspect-video bg-black text-white even:border-r even:border-dashed even:border-gray-700">
      <Button
        onClick={handleClick}
        className={cn(
          "h-full text-white text-center text-[4rem] font-extrabold rounded-none border-0 bg-transparent flex items-center justify-center w-full",
          { "text-red-500": totalScore < 0 }
        )}
      >
        {scoreObj ? totalScore : <span className="text-white">-</span>}
      </Button>

      {hammer && (
        <Hammer
          size={16}
          className={cn("absolute stroke-white top-2 left-2", {
            "left-auto right-2": position === 1,
          })}
        />
      )}

      {frameScore ? (
        <span
          className={cn("absolute bottom-2 left-2 text-xs font-bold", {
            "left-auto right-2": position === 1,
            "text-red-500": frameScore < 0,
          })}
        >
          {frameScore}
        </span>
      ) : undefined}
    </div>
  );
};
ScoreboardCell.displayName = "ScoreboardCell";
