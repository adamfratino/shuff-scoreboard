import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

export const SubmitMatchControls = () => {
  return (
    <div className="flex flex-col gap-1">
      <DialogClose asChild>
        <Button size="lg" variant="outline" className="w-full">
          Go back
        </Button>
      </DialogClose>
      <Button size="lg" className="w-full">
        Submit
      </Button>
    </div>
  );
};
SubmitMatchControls.displayName = "SubmitMatchControls";
