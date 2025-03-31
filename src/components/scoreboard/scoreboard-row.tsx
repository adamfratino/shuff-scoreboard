import { HAMMER_PATTERN } from "@/constants";

import { ScoreboardCell, type ScoreboardCellProps } from "./scoreboard-cell";

export type ScoreboardRowProps = {
  frame: number;
};

export const ScoreboardRow = ({ frame }: ScoreboardRowProps) => {
  return (
    <div className="grid grid-cols-2 sticky top-0">
      <h4 className="col-span-2 bg-gray-700 text-center text-white font-bold text-xs p-1">
        Frame {frame + 1}
      </h4>
      {[...Array(2).keys()].map((_, i) => (
        <ScoreboardCell
          key={i}
          frame={frame + 1}
          position={i as ScoreboardCellProps["position"]}
          hammer={HAMMER_PATTERN[frame % HAMMER_PATTERN.length] === i}
        />
      ))}
    </div>
  );
};
ScoreboardRow.displayName = "ScoreboardRow";
