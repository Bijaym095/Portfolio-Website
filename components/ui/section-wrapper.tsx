import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.ComponentProps<"div"> {
  asContainer?: boolean;
}

interface SectionSubtitleProps extends React.ComponentProps<"span"> {}

function SectionWrapper({
  asContainer = true,
  className,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      {...props}
      className={cn(
        asContainer && "container",
        "my-12 lg:my-16 xl:my-20 2xl:my-[6.25rem]",
        className
      )}
    />
  );
}

function SectionSubtitle({ className, ...props }: SectionSubtitleProps) {
  return (
    <small
      {...props}
      className={cn(
        "block mb-2.5 font-medium text-[0.9375rem] 2xl:text-[1rem] leading-snug text-primary tracking-wider uppercase",
        className
      )}
    />
  );
}

export { SectionSubtitle, SectionWrapper };
