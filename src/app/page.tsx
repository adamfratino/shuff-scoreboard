import { ScoreboardDrawer } from "@/components/scoreboard-drawer/scoreboard-drawer";
import { ScoreboardGrid } from "@/components/scoreboard/scoreboard-grid";

export default function Home() {
  return (
    <>
      <ScoreboardGrid />
      <ScoreboardDrawer />
    </>
  );
}
