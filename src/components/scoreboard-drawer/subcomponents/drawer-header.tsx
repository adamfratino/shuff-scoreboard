import {
  DrawerDescription,
  DrawerHeader as DrawerHeaderWrapper,
  DrawerTitle,
} from "@/components/ui/drawer";

import { useSetScoreStore } from "@/stores/set-score-store";

export const DrawerHeader = () => {
  const currentFrame = useSetScoreStore((s) => s.currentFrame);

  return (
    <DrawerHeaderWrapper className="px-0">
      <DrawerTitle>Ready to score frame {currentFrame}?</DrawerTitle>
      <DrawerDescription className="sr-only">
        Tally up your scoring discs and submit 'em here.
      </DrawerDescription>
    </DrawerHeaderWrapper>
  );
};
DrawerHeader.displayName = "DrawerHeader";
