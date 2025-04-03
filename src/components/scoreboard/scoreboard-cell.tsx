"use client";

import NumberFlow from "@number-flow/react";
import { Hammer, CookingPot, Cherry, Crown, Siren, Pizza } from "lucide-react";

import { useScoreStore } from "@/stores/score-store";
import { useSetScoreStore } from "@/stores/set-score-store";

import {
  sumPositiveScoreCounts,
  calculateFrameTotalScore,
  calculateMatchTotalScore,
  cn,
} from "@/utils";

export type ScoreboardCellProps = {
  frame: number;
  position: 0 | 1;
  isWinner?: boolean;
  isHammer?: boolean;
  disabled?: boolean;
};

export const ScoreboardCell = ({
  isHammer,
  position,
  frame,
  disabled,
}: ScoreboardCellProps) => {
  const player1Score = useScoreStore((s) => s.player1Score);
  const player2Score = useScoreStore((s) => s.player2Score);

  const setOpen = useSetScoreStore((s) => s.setOpen);
  const setCurrentFrame = useSetScoreStore((s) => s.setCurrentFrame);

  const scoresArr = [player1Score, player2Score];
  const scoreObj = Object.entries(scoresArr[position]).find(
    (fr) => Number(fr[0]) === frame
  );
  const oppScoreObj = Object.entries(scoresArr[1 - position]).find(
    (fr) => Number(fr[0]) === frame
  );

  const frameData = scoreObj ? scoreObj[1] : undefined;
  const oppFrameData = scoreObj ? oppScoreObj![1] : undefined;

  const frameScore = frameData
    ? calculateFrameTotalScore(frameData)
    : undefined;
  const oppFrameScore = frameData
    ? calculateFrameTotalScore(oppFrameData!)
    : undefined;
  const totalScore = calculateMatchTotalScore(scoresArr[position], frame);

  const isWinner = frameScore! > oppFrameScore!;

  const previousFrame = frame - 1;
  const previousTotalScore =
    previousFrame > 0
      ? calculateMatchTotalScore(scoresArr[position], previousFrame)
      : 0;

  const scoreChanged = totalScore !== previousTotalScore;
  const isUnchangedScore = previousFrame > 0 && scoreObj && !scoreChanged;

  const tenPointCount = frameData ? frameData[10] || 0 : 0;
  const minusTenPointCount = frameData ? frameData["-10"] || 0 : 0;

  const isPepperoni = sumPositiveScoreCounts(frameData) === 4;

  const handleClick = () => {
    setOpen(true);
    setCurrentFrame(frame);
  };

  return (
    <div className="relative aspect-video bg-black text-white even:border-r even:border-dashed even:border-gray-700">
      <button
        onClick={handleClick}
        disabled={disabled}
        className={cn(
          "h-full text-white text-center text-[4rem] font-extrabold rounded-none border-0 bg-transparent flex items-center justify-center w-full transition-all disabled:opacity-50 disabled:pointer-events-none",
          { "text-red-500": totalScore < 0 }
        )}
      >
        <NumberFlow
          value={scoreObj ? totalScore : 0}
          aria-hidden={scoreObj ? "false" : "true"}
          className={cn("transition-all", {
            "opacity-0 sr-only": !scoreObj,
            "opacity-40": isUnchangedScore,
          })}
        />
      </button>

      {!isHammer && (
        <div
          className={cn(
            "absolute top-0 h-1/4 translate-y-12 z-10 w-2 bg-white",
            position === 1
              ? "left-0 [clip-path:polygon(0_0,0_100%,8px_50%)]" // Left triangle
              : "right-0 [clip-path:polygon(100%_0,100%_100%,calc(100%-8px)_50%)]", // Right triangle
            { "bg-gray-500": disabled }
          )}
        />
      )}

      {isWinner && (
        <div
          className={cn("absolute flex gap-1 top-2 right-2", {
            "right-auto left-2": position === 1,
          })}
        >
          <Crown size={14} />
          {!isHammer && <Siren size={14} />}
        </div>
      )}

      {isHammer && (
        <Hammer
          size={16}
          className={cn("absolute stroke-white top-2 left-2", {
            "left-auto right-2": position === 1,
            "stroke-gray-500": disabled,
          })}
        />
      )}

      {frameScore ? (
        <span
          className={cn("absolute bottom-2 right-2 text-xs font-bold", {
            "right-auto left-2": position === 1,
            "text-red-500": frameScore < 0,
          })}
        >
          {frameScore}
        </span>
      ) : undefined}

      {(tenPointCount > 0 || minusTenPointCount > 0) && (
        <div
          className={cn(
            "absolute bottom-2 flex items-center space-x-1 h-4",
            position === 0 ? "left-2" : "right-2"
          )}
        >
          {Array.from({ length: tenPointCount }).map((_, i) => (
            <Cherry key={`cherry-${i}`} size={14} />
          ))}

          {Array.from({ length: minusTenPointCount }).map((_, i) => (
            <CookingPot key={`pot-${i}`} size={14} />
          ))}

          {isPepperoni && <Pizza size={14} />}
        </div>
      )}
    </div>
  );
};
ScoreboardCell.displayName = "ScoreboardCell";
