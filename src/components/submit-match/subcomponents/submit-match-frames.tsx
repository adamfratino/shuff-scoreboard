import { useScoreDetails } from "@/hooks";
import { useScoreStore } from "@/stores/score-store";
import type { Frame, Position } from "@/types";
import { cn } from "@/utils";

import { ScoreboardCellAchievements } from "../../scoreboard/subcomponents";

export const SubmitMatchFrames = () => {
  const player1Score = useScoreStore((s) => s.player1Score);
  const player2Score = useScoreStore((s) => s.player2Score);

  const noScores =
    Object.keys(player1Score).length === 0 &&
    Object.keys(player2Score).length === 0;

  if (noScores) return null;

  return (
    <div className="grid grid-cols-2 gap-0.5">
      <div className="flex flex-col">
        {Object.values(player1Score).map((score, i) => (
          <FrameWrapper key={i} frame={i + 1} position={0} />
        ))}
      </div>
      <div className="flex flex-col">
        {Object.values(player2Score).map((score, i) => (
          <FrameWrapper key={i} frame={i + 1} position={1} />
        ))}
      </div>
    </div>
  );
};
SubmitMatchFrames.displayName = "SubmitMatchFrames";

type FrameWrapperProps = {
  frame: Frame;
  position: Position;
};

const FrameWrapper = ({ frame, position }: FrameWrapperProps) => {
  const { totalScore, isUnchangedScore } = useScoreDetails({
    frame,
    position,
  });

  return (
    <div
      className={cn(
        "flex relative justify-between items-center p-2 bg-white border-t-2 border-t-black first:border-none"
      )}
    >
      <div className="flex flex-col gap-1">
        <ScoreboardCellAchievements
          position={position}
          frame={frame}
          className="!left-2 !right-auto"
        />
      </div>
      <span
        className={cn("text-4xl font-bold ml-auto leading-none", {
          "opacity-30": isUnchangedScore,
        })}
      >
        {totalScore}
      </span>
    </div>
  );
};
