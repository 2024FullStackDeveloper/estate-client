import { cn } from "@/lib/utils";
import React from "react";

export interface TitleProps {
  title: string;
  className?: string;
  subTitles?: string[];
  subTitleClassName?: string;
  center?: boolean;
  prefix?: boolean;
}

const Title: React.FC<TitleProps> = ({
  title,
  className,
  subTitles,
  subTitleClassName,
  center = false,
  prefix = true,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "flex flex-row ju items-center gap-4 ",
          center && "justify-center"
        )}
      >
        {prefix && (
          <div className="flex justify-center items-center bg-primary h-8 w-8 rounded-sm shadow ">
            <div className="bg-dark h-1 w-1 rounded-full" />
          </div>
        )}
        <h2 className={className}>{title}</h2>
      </div>
      {subTitles &&
        subTitles.length > 0 &&
        subTitles.map((e, index) => (
          <p key={index} className={cn("text-gray-500", subTitleClassName)}>
            {e}
          </p>
        ))}
    </div>
  );
};

export default Title;
