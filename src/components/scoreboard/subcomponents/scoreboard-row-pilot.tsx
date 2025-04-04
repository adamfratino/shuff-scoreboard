import { Crown, Siren } from "lucide-react";

import { SCOREBOARD_CELL_ICON_SIZE } from "@/constants";
import { useScoreDetails } from "@/hooks";
import type { Position, Frame } from "@/types";
import { cn } from "@/utils";

type ScoreboardRowPilotProps = {
  position: Position;
  frame: Frame;
  disabled?: boolean;
};

export const ScoreboardRowPilot = ({
  position,
  frame,
  disabled,
}: ScoreboardRowPilotProps) => {
  const { doesPositionWin } = useScoreDetails({
    frame,
    position: 0,
  });

  const pilotWins = doesPositionWin(position);

  if (!pilotWins) return null;

  return (
    <div
      className={cn("flex gap-1 absolute top-2 left-2", {
        "left-auto right-2": position === 1,
        "flex-row-reverse": position === 0,
        "stroke-gray-500": disabled,
      })}
    >
      <Crown size={SCOREBOARD_CELL_ICON_SIZE} className="stroke-white" />
      <Siren size={SCOREBOARD_CELL_ICON_SIZE} className="stroke-white" />
    </div>
  );
};
ScoreboardRowPilot.displayName = "ScoreboardRowPilot";
