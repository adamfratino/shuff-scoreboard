"use client";

import { useScoreDetails } from "@/hooks";
import type { Frame, Position } from "@/types";
import { cn } from "@/utils";

type ScoreboardCellFrameScoreProps = {
  position: Position;
  frame: Frame;
  reverse?: boolean;
};

export const ScoreboardCellFrameScore = ({
  position,
  frame,
  reverse,
}: ScoreboardCellFrameScoreProps) => {
  const { frameScore } = useScoreDetails({
    frame,
    position,
  });

  if (!frameScore) return null;

  return (
    <span
      className={cn("absolute top-2 right-2 text-xs font-bold", {
        "right-auto left-2": position === 1 || (position === 0 && reverse),
        "right-2 left-auto": position === 1 && reverse,
        "text-red-500": frameScore < 0,
      })}
    >
      {frameScore}
    </span>
  );
};
ScoreboardCellFrameScore.displayName = "ScoreboardCellFrameScore";
