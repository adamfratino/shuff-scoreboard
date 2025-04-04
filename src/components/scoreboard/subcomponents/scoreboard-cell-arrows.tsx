import type { Position } from "@/types";
import { cn } from "@/utils";

type ScoreboardCellArrowsProps = {
  position?: Position;
  disabled?: boolean;
  goesFirst?: boolean;
  reverse?: boolean;
};

export const ScoreboardCellArrows = ({
  position,
  reverse,
  goesFirst,
  disabled,
}: ScoreboardCellArrowsProps) => {
  if (goesFirst) return null;

  return (
    <div
      className={cn(
        "absolute top-0 h-1/4 translate-y-12 z-10 w-2 bg-white",
        position === 0
          ? "right-0 [clip-path:polygon(100%_0,100%_100%,calc(100%-8px)_50%)]" // Right triangle
          : "left-0 [clip-path:polygon(0_0,0_100%,8px_50%)]", // Left triangle
        {
          "right-full": position === 0 && reverse,
          "left-full": position === 1 && reverse,
          "bg-gray-500": disabled,
        }
      )}
    />
  );
};
ScoreboardCellArrows.displayName = "ScoreboardCellArrows";
