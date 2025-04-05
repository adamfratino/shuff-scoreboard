import { useRef, useLayoutEffect } from "react";

import { SubmitMatchDialog } from "../submit-match/submit-match-dialog";
import { Button } from "../ui/button";

type ScoreboardFooterProps = {};

export const ScoreboardFooter = () => {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (footerRef.current) {
      const footerHeight = footerRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--footer-height",
        footerHeight + "px"
      );
    }
  }, [footerRef]);

  return (
    <footer ref={footerRef} className="w-[100dvw] p-4 fixed bottom-0">
      <SubmitMatchDialog
        trigger={
          <Button size="xl" variant="secondary" className="w-full">
            Submit match
          </Button>
        }
      />
    </footer>
  );
};
ScoreboardFooter.displayName = "ScoreboardFooter";
