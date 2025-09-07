import { cn } from "@/lib/utils";
import React from "react";

interface RateBoxProps {
  className?: string;
  rateValue: number;
  text: string;
  textClassName?: string;
}

const RateBox: React.FC<RateBoxProps> = ({
  className,
  rateValue,
  text,
  textClassName,
}) => {
  const rate = Math.abs(rateValue);

  return (
    <div className={cn("flex flex-col gap-2 items-center", className)}>
      <h2 className="text-primary">{rate.toString() + " + "}</h2>
      <p className={cn(" text-gray-500 !text-xl  md:!text-2xl", textClassName)}>
        {text}
      </p>
    </div>
  );
};

export default RateBox;
