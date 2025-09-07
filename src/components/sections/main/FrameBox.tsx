import { cn } from "@/lib/utils";
import React, { useDeferredValue } from "react";
interface FrameBoxProps {
  className?:string,
  imageUrl1: string;
}
const FrameBox: React.FC<FrameBoxProps> = ({className,imageUrl1 }) => {
  const imageValue1 = useDeferredValue(imageUrl1);
  return (
    <div className={cn("relative max-w-full max-h-full w-full h-full rounded-xl",className)}>
      <div className={cn("max-w-full max-h-full absolute z-10 w-full h-full rounded-lg bg-dark   rotate-2 shadow-2xl")}        />
              <div className={cn("max-w-full max-h-full absolute z-40 w-full h-full opacity-90  bg-cover  bg-no-repeat rounded-lg bg-fixed object-cover bg-center bg-origin-content")} 
        style={{backgroundImage:`url('${imageValue1}')`}}
        />
    </div>
  );
};

export default FrameBox;
