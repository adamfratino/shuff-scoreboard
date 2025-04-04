"use client";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

import { useSetScoreStore } from "@/stores/set-score-store";

import { DrawerHeader } from "./drawer-header";
import { DrawerControls } from "./drawer-controls";

export const DrawerWrapper = ({ children }: React.PropsWithChildren) => {
  const open = useSetScoreStore((s) => s.open);
  const setOpen = useSetScoreStore((s) => s.setOpen);
  const resetScores = useSetScoreStore((s) => s.resetScores);

  return (
    <Drawer open={open}>
      <DrawerContent
        onOverlayClick={() => setOpen(false)}
        className="p-4 pb-8 max-w-120 mx-auto"
        data-vaul-no-drag
      >
        <div className="w-full flex justify-between items-center">
          <DrawerHeader />
          <Button
            onClick={resetScores}
            size="sm"
            variant="outline"
            /** @todo figure out clear button condition/behavior */
            disabled={true}
          >
            Clear scores
          </Button>
        </div>
        <div className="w-full mx-auto pb-2">{children}</div>

        <DrawerControls />
      </DrawerContent>
    </Drawer>
  );
};
DrawerWrapper.displayName = "DrawerWrapper";
