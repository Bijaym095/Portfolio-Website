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

function SectionHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return <header {...props} className={cn("mb-8 2xl:mb-12", className)} />;
}

function SectionTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      {...props}
      className={cn(
        "mb-2 2xl:mb-4 font-poppins font-bold text-[1.5rem] lg:text-[2.25rem] 2xl:text-[2.625rem] leading-tight text-black [&_span]:text-primary",
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

export { SectionTitle, SectionSubtitle, SectionHeader, SectionWrapper };
