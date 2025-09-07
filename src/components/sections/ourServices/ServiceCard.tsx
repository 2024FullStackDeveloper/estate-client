import Title, { type TitleProps } from "@/components/common/Title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import useLocalizer from "@/hooks/useLocalizer";
import { cn } from "@/lib/utils";
import { MoveUpLeft, MoveUpRight } from "lucide-react";
import React from "react";

interface ServiceCardProps extends React.ComponentProps<typeof Card> {
  headerProps: TitleProps;
  content?:string,
  items?: Array<{
    up: string;
    down: string;
  }>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  headerProps,
  content,
  items,
  ...props
}) => {
  const { isRTL } = useLocalizer();

  return (
    <Card {...props} className={cn("relative",props?.className)}>
      <div className="bg-cover object-cover bg-center bg-fixed w-full h-full absolute z-0 opacity-10" style={{backgroundImage:`url('images/building2.jpg')`}}/>
      <CardContent className="flex h-[250px] w-full aspect-square p-6 z-10">
        <div className="flex flex-col gap-2">
          <Title className="md:!text-xl text:lg" {...headerProps} />
           {content && <p className="line-clamp-">{content}</p>}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row gap-2 w-full">
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-card-box flex-1 rounded-md h-24 p-2"
            >
              <p className="lg:text-xl text-sm ">{item.up}</p>
              <span className="lg:text-lg text-sm font-bold ">{item.down}</span>
            </div>
          ))}
          {(items && items?.length > 0) && <div className="bg-primary rounded-md expand transition-all flex-1 hidden">
            <div className="flex justify-center items-center w-full h-full text-black">
              {isRTL ? <MoveUpRight size={32} /> : <MoveUpLeft size={32} />}
            </div>
          </div>
          }
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
