import { cn } from "@/lib/utils";
import React from "react";

export interface TitleProps {
  title: string;
  className?: string;
  subTitle?: string;
  subTitleClassName?: string;
}

const Title: React.FC<TitleProps> = ({
  title,
  className,
  subTitle,
  subTitleClassName,
}) => {
  return <div className="flex flex-col gap-4">
        <div className={cn("flex flex-row items-center gap-4 ")}>
            <div className="flex justify-center items-center bg-primary h-8 w-8 rounded-sm shadow ">
                <div className="bg-dark h-1 w-1 rounded-full"/>
            </div>
            <h2 className={className}>{title}</h2>
        </div>
        {subTitle && <p className={cn("text-gray-500",subTitleClassName)}>{subTitle}</p>}
  </div>;
};

export default Title;
