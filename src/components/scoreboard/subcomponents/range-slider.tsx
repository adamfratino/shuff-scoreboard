import { cn } from "@/utils";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

type RangeSliderProps = {
  label?: string;
  max: number;
  min?: number;
  interval?: number;
};

export function RangeSlider({
  label,
  min = 0,
  max,
  interval = 1,
}: RangeSliderProps) {
  const ticks = [...Array(max + 1)].map((_, i) => i);

  return (
    <div className="*:not-first:mt-4">
      {label && <Label>{label}</Label>}
      <div>
        <Slider defaultValue={[5]} max={max} aria-label="Slider with ticks" />
        <span
          className="text-muted-foreground mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
          aria-hidden="true"
        >
          {ticks.map((_, i) => (
            <span
              key={i}
              className="flex w-0 flex-col items-center justify-center gap-2"
            >
              <span
                className={cn(
                  "bg-muted-foreground/70 h-1 w-px",
                  i % interval !== 0 && "h-0.5"
                )}
              />
              <span className={cn(i % interval !== 0 && "opacity-0")}>{i}</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
RangeSlider.displayName = "RangeSlider";
