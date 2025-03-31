import { Drawer, DrawerContent } from "@/components/ui/drawer";

import { useSetScoreStore } from "@/stores/set-score-store";

import { DrawerHeader } from "./drawer-header";
import { DrawerNames } from "./drawer-names";
import { ScoreTotals } from "./score-totals";
import { DrawerControls } from "./drawer-controls";

export const DrawerWrapper = ({ children }: React.PropsWithChildren) => {
  const open = useSetScoreStore((s) => s.open);
  const setOpen = useSetScoreStore((s) => s.setOpen);

  return (
    <Drawer open={open}>
      <DrawerContent
        onOverlayClick={() => setOpen(false)}
        className="p-4 pb-8"
        data-vaul-no-drag
      >
        <DrawerHeader />
        <div className="w-full mx-auto pb-2">
          <DrawerNames />
          {children}
        </div>

        <ScoreTotals />
        <DrawerControls />
      </DrawerContent>
    </Drawer>
  );
};
DrawerWrapper.displayName = "DrawerWrapper";
