import { cn } from "@/lib/utils";
import React from "react";

interface BallProps{
className?:string,
height?:number,
width?:number
}

const Ball : React.FC<BallProps> = (
{
className,
height = 300,
width = 300
}
)=>{
    return <div 
    className={cn("absolute bg-primary/10 rounded-full -z-1 border border-primary/20",className)}
    style={{
        height: (height ?? 200) + "px",
        width: (width ?? 200) + "px"
    }}
    />
}

export default Ball;