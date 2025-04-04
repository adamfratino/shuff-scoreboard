import { ScoreboardDrawer } from "@/components/scoreboard/scoreboard-drawer";
import { ScoreboardGrid } from "@/components/scoreboard/scoreboard-grid";

export default function Home() {
  return (
    <>
      <ScoreboardGrid />
      <ScoreboardDrawer />
    </>
  );
}
