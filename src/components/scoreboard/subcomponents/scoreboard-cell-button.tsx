"use client";

import NumberFlow from "@number-flow/react";

import { useScoreDetails } from "@/hooks";
import { useSetScoreStore } from "@/stores/set-score-store";
import type { Frame, Position } from "@/types";
import { cn } from "@/utils";

type ScorebardCellButtonProps = {
  frame: Frame;
  position: Position;
  disabled?: boolean;
};

export const ScoreboardCellButton = ({
  frame,
  position,
  disabled,
}: ScorebardCellButtonProps) => {
  const { scoreObj, totalScore, isUnchangedScore } = useScoreDetails({
    frame,
    position,
  });

  const setOpen = useSetScoreStore((s) => s.setOpen);
  const setCurrentFrame = useSetScoreStore((s) => s.setCurrentFrame);

  const handleClick = () => {
    setOpen(true);
    setCurrentFrame(frame);
  };

  return (
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
  );
};
ScoreboardCellButton.displayName = "ScoreboardCellButton";
