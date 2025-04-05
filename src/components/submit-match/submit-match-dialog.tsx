import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import {
  SubmitMatchHeader,
  SubmitMatchControls,
  SubmitMatchTotal,
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
        <SubmitMatchTotal />
        <SubmitMatchControls />
      </DialogContent>
    </Dialog>
  );
};
