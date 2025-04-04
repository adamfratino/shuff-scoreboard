import type { Frame, Position } from "@/types";

import {
  ScoreboardCellButton,
  ScoreboardCellArrows,
  ScoreboardCellFrameScore,
  ScoreboardCellAchievements,
} from "./subcomponents";

export type ScoreboardCellProps = {
  frame: Frame;
  position: Position;
  goesFirst?: boolean;
  disabled?: boolean;
  reverse?: boolean;
};

export const ScoreboardCell = ({
  goesFirst,
  position,
  frame,
  disabled,
  reverse,
}: ScoreboardCellProps) => {
  return (
    <div className="relative aspect-video bg-black text-white">
      {/** toggles drawer, displays total score */}
      <ScoreboardCellButton
        frame={frame}
        position={position}
        disabled={disabled}
      />

      {/** indicators down the center line for who goes first */}
      <ScoreboardCellArrows
        position={position}
        goesFirst={goesFirst}
        reverse={reverse}
        disabled={disabled}
      />

      {/** little numbers in the corner show the points scored in the frame */}
      <ScoreboardCellFrameScore
        position={position}
        frame={frame}
        reverse={reverse}
      />

      {/** display icons for cherries, pepperonis, kitchens */}
      <ScoreboardCellAchievements
        frame={frame}
        position={position}
        reverse={reverse}
      />
    </div>
  );
};
ScoreboardCell.displayName = "ScoreboardCell";
