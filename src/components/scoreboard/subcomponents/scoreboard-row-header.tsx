import type { Frame } from "@/types";
import { cn } from "@/utils";

type ScoreboardRowHeaderProps = {
  frame: Frame;
  disabled?: boolean;
};

export const ScoreboardRowHeader = ({
  frame,
  disabled,
}: ScoreboardRowHeaderProps) => {
  return (
    <h4
      className={cn(
        "col-span-2 bg-gray-700 text-center text-white font-bold text-xs p-1",
        { "bg-gray-900 text-gray-500": disabled }
      )}
    >
      Frame {frame}
    </h4>
  );
};
ScoreboardRowHeader.displayName = "ScoreboardRowHeader";
