import NumberFlow from "@number-flow/react";

export type ScoreTotalsProps = {
  p1Score: number;
  p2Score: number;
};

export const ScoreTotals = ({ p1Score = 0, p2Score = 0 }: ScoreTotalsProps) => {
  return (
    <div className="grid grid-cols-[4rem_1fr_1fr] items-center mb-2">
      <NumberFlow
        value={p1Score}
        className="bg-yellow-400 font-bold text-2xl h-6 pb-2 flex items-center justify-center rounded-bl-sm col-start-2"
      />
      <NumberFlow
        value={p2Score}
        className="bg-black text-white font-bold text-2xl h-6 pb-2 flex items-center justify-center rounded-br-sm"
      />
    </div>
  );
};
ScoreTotals.displayName = "ScoreTotals";
