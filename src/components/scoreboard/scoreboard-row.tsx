import { HAMMER_PATTERN, HEADER_HEIGHT, STICKY_OFFSET } from "@/constants";
import { cn } from "@/utils";
import { Position } from "@/types";

import { ScoreboardCell, type ScoreboardCellProps } from "./scoreboard-cell";
import {
  ScoreboardRowHammer,
  ScoreboardRowHeader,
  ScoreboardRowPilot,
} from "./subcomponents";

export type ScoreboardRowProps = {
  frame: number;
  disabled?: boolean;
  hasSwitched?: boolean;
};

export const ScoreboardRow = ({
  frame,
  disabled,
  hasSwitched,
}: ScoreboardRowProps) => {
  const FRAME_NUMBER = frame + 1;
  const HAMMER_POSITION = HAMMER_PATTERN[
    frame % HAMMER_PATTERN.length
  ] as Position;

  return (
    <ScoreboardRowWrapper frame={frame} disabled={disabled}>
      <ScoreboardRowHeader
        frame={FRAME_NUMBER}
        disabled={disabled}
        hasSwitched={hasSwitched}
      />

      <ScoreboardCellsWrapper hasSwitched={hasSwitched} disabled={disabled}>
        {[...Array(2).keys()].map((_, i) => (
          <ScoreboardCell
            key={i}
            frame={FRAME_NUMBER}
            position={i as ScoreboardCellProps["position"]}
            goesFirst={HAMMER_POSITION === i}
            disabled={disabled}
            reverse={hasSwitched}
          />
        ))}

        {/** hammer icon, and maybe a crown icon if hammer wins */}
        <ScoreboardRowHammer position={HAMMER_POSITION} frame={FRAME_NUMBER} />

        {/** if pilot wins, show crown ("win") and siren ("stealing" the hammer) */}
        <ScoreboardRowPilot
          position={(1 - HAMMER_POSITION) as Position}
          frame={FRAME_NUMBER}
        />
      </ScoreboardCellsWrapper>
    </ScoreboardRowWrapper>
  );
};
ScoreboardRow.displayName = "ScoreboardRow";

const ScoreboardRowWrapper = ({
  frame,
  disabled,
  children,
}: React.PropsWithChildren<Pick<ScoreboardRowProps, "disabled" | "frame">>) => (
  <li
    className={cn("sticky", {
      "hover:[&_button]:bg-primary/10": !disabled,
    })}
    style={{ top: `calc(${HEADER_HEIGHT}px + ${STICKY_OFFSET}px * ${frame})` }}
  >
    {children}
  </li>
);
ScoreboardRowWrapper.displayName = "ScoreboardRowWrapper";

const ScoreboardCellsWrapper = ({
  hasSwitched,
  disabled,
  children,
}: React.PropsWithChildren<
  Pick<ScoreboardRowProps, "hasSwitched" | "disabled">
>) => (
  <div
    className={cn("relative flex [&>*]:flex-1 gap-px bg-gray-700", {
      "flex-row-reverse": hasSwitched,
      "bg-gray-900 text-gray-500": disabled,
    })}
  >
    {children}
  </div>
);
ScoreboardCellsWrapper.displayName = "ScoreboardCellsWrapper";
