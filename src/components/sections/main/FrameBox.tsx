import useLocalizer from "@/hooks/useLocalizer";
import { cn } from "@/lib/utils";
import React, { useDeferredValue } from "react";
interface FrameBoxProps {
  className?:string,
  imageUrl: string;
}
const FrameBox: React.FC<FrameBoxProps> = ({className, imageUrl }) => {
  const {isRTL} = useLocalizer();
  const imageValue = useDeferredValue(imageUrl);
  return (
    <div className={cn("absolute rotate-[45deg]  rounded-xl -top-[30%] -z-2 h-[650px] w-[700px] ", isRTL ? "-left-[15%]  " : "-right-[15%] ",className)}>
      <div className={cn("fixed  rounded-2xl bg-black/90 scale-[1.25] shadow-2xl -z-1 overflow-hidden",isRTL ? " h-[600px] w-full " : " w-[600px] h-full ")}>
        <div className={cn("w-full h-full absolute  -rotate-[45deg] mt-24 bg-cover opacity-70 bg-center bg-no-repeat  object-cover scale-150 !bg-fixed",isRTL ? "-right-[150px]" : "left-[40px]")} 
        style={{backgroundImage:`url('${imageValue}')`}}
        />
      </div>
    </div>
  );
};

export default FrameBox;
