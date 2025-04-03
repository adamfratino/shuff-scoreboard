"use client";

import {
  RadioGroup,
  RadioGroupItem,
  type RadioGroupProps,
} from "@radix-ui/react-radio-group";
import { useState, useId } from "react";

import { cn } from "@/utils";

export type RadioGroupItemType = {
  label: React.ReactNode;
  value: string;
  subtext?: React.ReactNode;
  disabled?: boolean;
};

export type HammerSegmentsProps = RadioGroupProps & {
  items: RadioGroupItemType[];
  defaultValue?: string;
  fullwidth?: boolean;
};

export const HammerSegments = ({
  items,
  defaultValue,
  fullwidth,
  onValueChange,
  ...props
}: HammerSegmentsProps) => {
  const radioGroupId = useId();
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || items[0].value
  );

  const selectedIndex = items.findIndex((item) => item.value === selectedValue);
  const step = 100 / items.length;
  const translateX = selectedIndex * 100;

  const activeStyles = `
    [data-group-id="${radioGroupId}"]::after {
      width: ${step}%;
      transform: translateX(${translateX}%);
    }
  `;

  return (
    <RadioGroup
      data-group-id={radioGroupId}
      data-state={selectedValue}
      value={selectedValue}
      onValueChange={(val) => {
        onValueChange?.(val);
        setSelectedValue(val);
      }}
      className={cn([
        "border-2 border-transparent",
        "dark:bg-stone-700 p-0.5",
        "rounded-lg",
        "bg-gray-800",
        "group",
        "relative",
        "inline-grid",
        "auto-cols-fr",
        "grid-flow-col",
        "items-center",
        "text-sm",
        "font-medium",
        "after:absolute",
        "after:inset-y-0",
        "after:rounded-md",
        "after:bg-inputs-background",
        "dark:after:bg-stone-800",
        "after:shadow-sm",
        "after:shadow-black/5",
        "after:transition-transform",
        "after:duration-300",
        "after:bg-background",
        "after:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        "w-fit",
        { "w-full": fullwidth },
      ])}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: activeStyles }} />
      {items?.map(({ value, label }) => (
        <HammerSegmentLabel key={value} data-selected={selectedValue === value}>
          {label}
          <RadioGroupItem value={value} className="sr-only" />
        </HammerSegmentLabel>
      ))}
    </RadioGroup>
  );
};
HammerSegments.displayName = "HammerSegments";

const HammerSegmentLabel = ({
  children,
  ...props
}: React.PropsWithChildren) => {
  return (
    <label
      className={cn([
        "leading-none",
        "relative",
        "z-10",
        "text-foreground",
        "inline-flex",
        "h-full",
        "cursor-pointer",
        "items-center",
        "justify-center",
        "whitespace-nowrap",
        "data-[selected=false]:text-background",
        "py-2 px-4 text-sm",
      ])}
      {...props}
    >
      {children}
    </label>
  );
};
HammerSegmentLabel.displayName = "HammerSegmentLabel";
