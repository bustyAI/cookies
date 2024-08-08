"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-6 w-full max-w-5xl", className)} // Adjusted padding and width
      classNames={{
        months: "flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0", // Adjusted space
        month: "space-y-6",
        caption: "flex justify-center pt-2 relative items-center",
        caption_label: "text-xl font-medium", // Increased font size
        nav: "space-x-4 flex items-center", // Increased spacing
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-12 w-12 bg-transparent p-0 opacity-50 hover:opacity-100" // Increased size
        ),
        nav_button_previous: "absolute left-2",
        nav_button_next: "absolute right-2",
        table: "w-full border-collapse space-y-2",
        head_row: "flex",
        head_cell:
          "text-neutral-500 rounded-md w-14 font-normal text-xl dark:text-neutral-400", // Increased size
        row: "flex w-full mt-2",
        cell: "h-14 w-14 text-center text-xl p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected])]:bg-neutral-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-neutral-800/50 dark:[&:has([aria-selected])]:bg-neutral-800", // Increased size
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-14 w-14 p-0 font-normal aria-selected:opacity-100" // Increased size
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-neutral-900 text-neutral-50 hover:bg-neutral-900 hover:text-neutral-50 focus:bg-neutral-900 focus:text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 dark:focus:bg-neutral-50 dark:focus:text-neutral-900",
        day_today:
          "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50",
        day_outside:
          "day-outside text-neutral-500 opacity-50 aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 aria-selected:opacity-30 dark:text-neutral-400 dark:aria-selected:bg-neutral-800/50 dark:aria-selected:text-neutral-400",
        day_disabled: "text-neutral-500 opacity-50 dark:text-neutral-400",
        day_range_middle:
          "aria-selected:bg-neutral-100 aria-selected:text-neutral-900 dark:aria-selected:bg-neutral-800 dark:aria-selected:text-neutral-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-8 w-8" />, // Increased size
        IconRight: ({ ...props }) => <ChevronRight className="h-8 w-8" />, // Increased size
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
