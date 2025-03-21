import { ScoreboardDrawer } from "@/components/scoreboard/scoreboard-drawer";
import { ScoreboardGrid } from "@/components/scoreboard/scoreboard-grid";
import { PlayerDialog } from "@/components/scoreboard/subcomponents/player-dialog";

export default function Home() {
  return (
    <div className="dark">
      <ScoreboardGrid />
      <ScoreboardDrawer />
      <PlayerDialog />
    </div>
  );
}
