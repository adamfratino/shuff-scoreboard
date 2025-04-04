import { usePlayersStore } from "@/stores/players-store";
import { cn } from "@/utils";

type DrawerNameProps = {
  reverse?: boolean;
};

export const DrawerNames = ({ reverse }: DrawerNameProps) => {
  const { player1, player2 } = usePlayersStore();

  return (
    <div className="grid grid-cols-[4rem_1fr] items-center">
      <div
        className={cn(
          [
            "flex col-start-2 [&>*]:flex-1",
            "[&>*]:first:rounded-tl-sm [&>*]:first:bg-yellow-400  [&>*]:first:text-black",
            "[&>*]:last:rounded-tr-sm [&>*]:last:bg-black [&>*]:last:text-white",
          ],
          {
            "flex-row-reverse [&>*]:first:rounded-tl-none [&>*]:first:rounded-tr-sm [&>*]:last:rounded-tl-sm [&>*]:last:rounded-tr-none [&>*]:first:bg-black [&>*]:last:bg-yellow-400 [&>*]:first:text-white [&>*]:last:text-black":
              reverse,
          }
        )}
      >
        <h5 className="font-bold text-xs h-6 flex items-center justify-center">
          {player1.name}
        </h5>
        <h5 className="font-bold text-xs h-6 flex items-center justify-center">
          {player2.name}
        </h5>
      </div>
    </div>
  );
};
DrawerNames.displayName = "DrawerNames";
