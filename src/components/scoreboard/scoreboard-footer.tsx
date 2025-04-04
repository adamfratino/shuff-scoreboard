import { useRef, useLayoutEffect } from "react";

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
    <footer
      ref={footerRef}
      className="w-[100dvw] p-4 border-t border-t-gray-900 fixed bottom-0"
    >
      <Button size="xl" variant="secondary" disabled className="w-full">
        Submit match
      </Button>
    </footer>
  );
};
ScoreboardFooter.displayName = "ScoreboardFooter";
