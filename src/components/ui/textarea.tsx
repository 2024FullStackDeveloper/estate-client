import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label";


interface TextareaProps extends React.ComponentProps<"textarea">{
  label?: string;
  labelClassName?: string;
  error?:string
}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, ...props }, ref) => {
  return (
      <div className="flex flex-col gap-4 mb-10">
        {props?.label && (
          <Label className={cn("text-secondary text-lg md:text-2xl flex flex-row gap-2 items-center",props?.labelClassName)}>
            {props?.label}
            {props?.required && <span className="text-primary">*</span>}
          </Label>
        )}

    <textarea
      className={cn(
        "flex min-h-[150px] w-full rounded-md  bg-input  px-3 py-2  ring-offset-gray-600 text-secondary lg:!text-2xl   placeholder:text-2xl placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1   disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  focus-visible:ring-gray-600",
        className
      )}
      ref={ref}
      {...props}
    />
    </div>
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
