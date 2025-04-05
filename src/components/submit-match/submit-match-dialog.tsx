import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  SubmitMatchHeader,
  SubmitMatchControls,
  SubmitMatchNames,
  SubmitMatchFrames,
} from "./subcomponents";

type SubmitMatchDialogProps = {
  trigger?: React.ReactNode;
};

export const SubmitMatchDialog = ({ trigger }: SubmitMatchDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <SubmitMatchHeader
          title="Ready to submit your match?"
          description="Once a score is submitted, it's locked in forever."
        />
        <div className="border-2 border-black rounded-md gap-px bg-black overflow-hidden">
          <SubmitMatchNames />
          <SubmitMatchFrames />
        </div>
        <SubmitMatchControls />
      </DialogContent>
    </Dialog>
  );
};
