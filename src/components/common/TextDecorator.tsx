import { cn } from "@/lib/utils";
import React, { type CSSProperties } from "react";

interface SpanProps {
  text: string;
  style?: CSSProperties;
  className?: string;
}

interface TextDecorator {
  className?: string;
  values: Array<SpanProps>;
}
const TextDecorator: React.FC<TextDecorator> = (
{
    className,
    values
}
) => {

    if (values?.length == 0) return <></>

    return <div className={cn("flex flex-row flex-wrap gap-2",className)}>
        {
            values?.map((span,index)=>(
                <span  key={`span-${index}`} className={span.className} style={span.style}>{span.text}</span>
            ))
        }
    </div>
};
export default TextDecorator;
