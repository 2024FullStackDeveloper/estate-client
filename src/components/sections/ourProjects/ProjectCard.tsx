import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import React from "react";

interface ProjectCardProps extends React.ComponentProps<"div"> {
  year: number;
  imageUrl: string;
  content?:string,
  description: string;
  address?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  year,
  imageUrl,
  content,
  description,
  address,
  ...props
}) => {
  return (
    <div className={cn("!bg-transparent flex flex-row items-center overflow-hidden", className)} {...props}>
      <div className="flex flex-col items-center gap-2">
        <span className="lg:text-4xl text-2xl">{year}</span>
        <div className="bg-primary w-4 h-4 rounded-xs shadow" />
        <div className="h-[400px] w-[.1px] bg-dark/10" />
      </div>
      <div className="flex flex-row gap-2">
        <div className="h-[350px] w-[350px] bg-card rounded-lg rotate-2 p-5 shadow-xl border border-dark/5">
          <div className="flex flex-col h-full w-full gap-2 ">
            <img
              src={imageUrl}
              alt={description}
              className="h-[80%] w-[100%] max-h-full max-w-full object-cover  rounded-md overflow-hidden"
            />
            <p className="truncate">{description}</p>
            {address && (
              <div className="flex flex-row gap-2 justify-end">
                <MapPin size={20} />
                <span>{address}</span>
              </div>
            )}
          </div>
        </div>
        {content && <p className=" line-clamp-5 p-1 flex-1 invisible xl:visible">{content}</p>}
        {/* {subImages && subImages.length > 0 && (
          <div className="hidden lg:block mt-10">
          <div className="flex flex-col gap-2 justify-center relative ">
            {subImages?.map((url, index) => (
              <div 
              className={cn("bg-card p-4 rounded-lg shadow",index + 2 % 2 == 0 ? "-rotate-12" : "rotate-12")}
              key={index}>
                <img
                  src={url}
                  alt={`subImage-${index}`}
                  className="h-[150px] w-[150px] object-cover rounded-md overflow-hidden"
                />
              </div>
            ))}
          </div>
          </div>
        )} */}
      </div>
  
    </div>
  );
};

export default ProjectCard;
