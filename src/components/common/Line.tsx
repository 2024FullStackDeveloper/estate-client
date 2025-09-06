import { cn } from "@/lib/utils";
import React from "react";

type LineWidthMesures = '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100';

interface LineProps{
    className?:string,
    height?:number,
    width?:LineWidthMesures,
    verticalMargin?:number,
    horizontalMargin?:number
}
const Line : React.FC<LineProps> = (
{
    className,
    height =.1,
    width = '100',
    verticalMargin = 30,
    horizontalMargin = 0
}
)=>{
return <div style={{height:height,width:width + '%'}} className={cn("bg-gray-200",verticalMargin && `my-[${verticalMargin}px]`, horizontalMargin && `mx-[${horizontalMargin}px]`,className)}/>
}

export default Line;