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
        Once a score is submitted, you'll need to delete it and re-submit to
        make corrections.
      </DialogDescription>
    </DialogHeader>
  );
};
SubmitMatchHeader.displayName = "SubmitMatchHeader";
