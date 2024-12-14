import { cn } from "@/lib/utils";
import React from "react";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export default function Tag({ name, className }: TagProps) {
  return (
    <div
      className={cn(
        "bg-section-200 rounded-2xl w-fit rounded-bl-none px-6 py-2",
        className
      )}
    >
      <div className="text-sm font-medium">{name}</div>
    </div>
  );
}
