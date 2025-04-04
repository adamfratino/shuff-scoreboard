import NumberFlow from "@number-flow/react";

import { cn } from "@/utils";

export type ScoreTotalsProps = {
  p1Score: number;
  p2Score: number;
  reverse?: boolean;
};

export const ScoreTotals = ({
  p1Score = 0,
  p2Score = 0,
  reverse,
}: ScoreTotalsProps) => {
  return (
    <div className="grid grid-cols-[4rem_1fr] items-center mb-2">
      <div
        className={cn(
          [
            "flex col-start-2 [&>*]:flex-1",
            "[&>*]:first:rounded-bl-sm [&>*]:first:bg-yellow-400  [&>*]:first:text-black",
            "[&>*]:last:rounded-br-sm [&>*]:last:bg-black [&>*]:last:text-white",
          ],
          {
            "flex-row-reverse [&>*]:first:rounded-bl-none [&>*]:first:rounded-br-sm [&>*]:last:rounded-bl-sm [&>*]:last:rounded-br-none [&>*]:first:bg-black [&>*]:last:bg-yellow-400 [&>*]:first:text-white [&>*]:last:text-black":
              reverse,
          }
        )}
      >
        <NumberFlow
          value={p1Score}
          className="flex-1 bg-yellow-400 font-bold text-2xl h-6 pb-2 flex items-center justify-center"
        />
        <NumberFlow
          value={p2Score}
          className="flex-1 bg-black text-white font-bold text-2xl h-6 pb-2 flex items-center justify-center"
        />
      </div>
    </div>
  );
};
ScoreTotals.displayName = "ScoreTotals";
