import { cn } from "@/lib/utils";
import React from "react";

interface TwoColLayoutProps extends React.ComponentProps<"div"> {
  wrapReverse?: boolean;
}

function TwoColLayout({
  wrapReverse = false,
  className,
  ...props
}: TwoColLayoutProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center gap-y-6 -mx-4",
        wrapReverse ? "flex-wrap-reverse" : "flex-wrap",
        className
      )}
    />
  );
}

function Column({ className, ...props }: React.ComponentProps<"div">) {
  return <div {...props} className={cn("w-full md:w-1/2 px-4", className)} />;
}

export { Column, TwoColLayout };
