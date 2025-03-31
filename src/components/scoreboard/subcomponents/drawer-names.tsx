import { usePlayersStore } from "@/stores/players-store";

export const DrawerNames = () => {
  const { player1, player2 } = usePlayersStore();

  return (
    <div className="grid grid-cols-[4rem_1fr_1fr] items-center mb-1">
      <h5 className="bg-yellow-400 font-bold text-xs h-8 flex items-center justify-center rounded-l-sm col-start-2">
        {player1.name}
      </h5>
      <h5 className="bg-black text-white font-bold text-xs h-8 flex items-center justify-center rounded-r-sm">
        {player2.name}
      </h5>

      {/* <div className="col-span-2 col-start-2">
        <ScoreSwitch
          labels={{ on: "Simple", off: "Detailed" }}
          className="w-full mt-2"
        />
      </div> */}
    </div>
  );
};
DrawerNames.displayName = "DrawerNames";
