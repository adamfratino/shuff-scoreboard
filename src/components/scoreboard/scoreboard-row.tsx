import { ScoreboardCell, type ScoreboardCellProps } from "./scoreboard-cell";

type ScoreboardRowProps = {
  frame: number;
};

const hammerPattern = [0, 1, 1, 0];

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
          hammer={hammerPattern[frame % hammerPattern.length] === i}
        />
      ))}
    </div>
  );
};
ScoreboardRow.displayName = "ScoreboardRow";
