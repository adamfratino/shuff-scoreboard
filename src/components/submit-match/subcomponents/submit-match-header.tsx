import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type SubmitMatchHeaderProps = {
  title?: string;
  description?: string;
};

export const SubmitMatchHeader = ({
  title,
  description,
}: SubmitMatchHeaderProps) => {
  return (
    <DialogHeader>
      <DialogTitle>Ready to submit your match?</DialogTitle>
      <DialogDescription>
        Once a score is submitted, it's locked in forever.
      </DialogDescription>
    </DialogHeader>
  );
};
SubmitMatchHeader.displayName = "SubmitMatchHeader";
