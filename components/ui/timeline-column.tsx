import React from "react";

import { Column } from "./two-col-block";
import { cn } from "@/lib/utils";

interface TimelineItem {
  institution?: string;
  degree?: string;
  company?: string;
  role?: string;
  period: string;
}

interface TimelineColumnProps extends React.ComponentProps<"div"> {
  title: string;
  items: TimelineItem[];
  className?: string;
}

function TimelineColumn({
  title,
  items,
  className,
  ...props
}: TimelineColumnProps) {
  return (
    <Column className={cn(className)} {...props}>
      <strong className="block mb-4 2xl:mb-6 pb-2 2xl:pb-4 font-semibold text-[1.25rem] 2xl:text-[1.5rem] leading-tight text-primary border-b border-black/20">
        {title}
      </strong>
      <ul className="space-y-6 border-dashed border-l border-gray-300 pl-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative pl-4 before:content-[''] before:absolute before:top-1 before:-left-5 before:size-2 before:bg-primary before:rounded-full"
          >
            <p className="text-sm text-gray-500 mb-1">{item.period}</p>
            <p className="font-medium text-gray-900 mb-1">
              {item.institution || item.company}
            </p>
            <p className="text-gray-700">{item.degree || item.role}</p>
          </li>
        ))}
      </ul>
    </Column>
  );
}

export default TimelineColumn;
