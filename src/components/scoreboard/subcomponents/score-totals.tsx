import { useSetScoreStore } from "@/stores/set-score-store";

export const ScoreTotals = () => {
  const p1TotalScore = useSetScoreStore((s) => s.p1TotalScore);
  const p2TotalScore = useSetScoreStore((s) => s.p2TotalScore);

  return (
    <div className="grid grid-cols-[4rem_1fr_1fr] items-center mb-1">
      <h5 className="bg-yellow-400 font-bold text-2xl h-10 flex items-center justify-center rounded-l-sm col-start-2">
        {p1TotalScore}
      </h5>
      <h5 className="bg-black text-white font-bold text-2xl h-10 flex items-center justify-center rounded-r-sm">
        {p2TotalScore}
      </h5>
    </div>
  );
};
ScoreTotals.displayName = "ScoreTotals";
