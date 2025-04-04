"use client";

import { Cherry, CookingPot, Pizza } from "lucide-react";

import { SCOREBOARD_CELL_ICON_SIZE } from "@/constants";
import { useScoreDetails } from "@/hooks";
import type { Frame, Position } from "@/types";
import { cn } from "@/utils";

type ScoreboardCellAchievementsProps = {
  position: Position;
  frame: Frame;
  reverse?: boolean;
  className?: string;
};

export const ScoreboardCellAchievements = ({
  frame,
  position,
  reverse,
  className,
}: ScoreboardCellAchievementsProps) => {
  const { isPepperoni, tenPointCount, minusTenPointCount } = useScoreDetails({
    frame,
    position,
  });

  if (!isPepperoni && !tenPointCount && !minusTenPointCount) return null;

  return (
    <div
      className={cn(
        "flex items-center space-x-1 h-4 absolute bottom-2 left-auto right-2",
        className,
        position === 0 || (position === 1 && reverse)
          ? "left-2"
          : "left-auto right-2",
        { "left-auto right-2": position === 0 && reverse }
      )}
    >
      {Array.from({ length: tenPointCount }).map((_, i) => (
        <Cherry key={`cherry-${i}`} size={SCOREBOARD_CELL_ICON_SIZE} />
      ))}

      {Array.from({ length: minusTenPointCount }).map((_, i) => (
        <CookingPot key={`pot-${i}`} size={SCOREBOARD_CELL_ICON_SIZE} />
      ))}

      {isPepperoni && <Pizza size={14} />}
    </div>
  );
};
ScoreboardCellAchievements.displayName = "ScoreboardCellAchievements";
