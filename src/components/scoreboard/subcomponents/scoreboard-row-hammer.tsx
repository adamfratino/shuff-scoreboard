"use client";

import { Hammer, Crown } from "lucide-react";

import { SCOREBOARD_CELL_ICON_SIZE } from "@/constants";
import type { Frame, Position } from "@/types";
import { cn } from "@/utils";
import { useScoreDetails } from "@/hooks";

type ScoreboardRowHammerProps = {
  frame: Frame;
  position: Position;
  disabled?: boolean;
};

export const ScoreboardRowHammer = ({
  frame,
  position,
  disabled,
}: ScoreboardRowHammerProps) => {
  const { doesPositionWin } = useScoreDetails({
    frame,
    position: 0,
  });

  const hammerWins = doesPositionWin(position);

  return (
    <div
      className={cn("flex gap-1 absolute top-2 left-2", {
        "left-auto right-2": position === 1,
        "flex-row-reverse": position === 0,
        "stroke-gray-500": disabled,
      })}
    >
      {hammerWins && (
        <Crown size={SCOREBOARD_CELL_ICON_SIZE} className="stroke-white" />
      )}
      <Hammer size={SCOREBOARD_CELL_ICON_SIZE} className="stroke-white" />
    </div>
  );
};
ScoreboardRowHammer.displayName = "ScoreboardRowHammer";
