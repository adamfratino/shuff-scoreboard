import { HAMMER_PATTERN } from "@/constants";
import { cn } from "@/utils";

import { ScoreboardCell, type ScoreboardCellProps } from "./scoreboard-cell";

export type ScoreboardRowProps = {
  frame: number;
  disabled?: boolean;
};

export const ScoreboardRow = ({ frame, disabled }: ScoreboardRowProps) => {
  return (
    <div
      className={cn("grid grid-cols-2 sticky top-10", {
        "hover:[&_button]:bg-primary/10": !disabled,
      })}
    >
      <h4
        className={cn(
          "col-span-2 bg-gray-700 text-center text-white font-bold text-xs p-1",
          { "bg-gray-900 text-gray-500": disabled }
        )}
      >
        Frame {frame + 1}
      </h4>
      {[...Array(2).keys()].map((_, i) => (
        <ScoreboardCell
          key={i}
          frame={frame + 1}
          position={i as ScoreboardCellProps["position"]}
          isHammer={HAMMER_PATTERN[frame % HAMMER_PATTERN.length] === i}
          disabled={disabled}
        />
      ))}
    </div>
  );
};
ScoreboardRow.displayName = "ScoreboardRow";
