import Title, { type TitleProps } from "@/components/common/Title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import useLocalizer from "@/hooks/useLocalizer";
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
    <Card {...props}>
      <CardContent className="flex h-[250px] w-full aspect-square p-6 ">
        <div className="flex flex-col gap-2">
          <Title {...headerProps} />
           {content && <p className="line-clamp-2">{content}</p>}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row gap-2 w-full">
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-card-box flex-2 rounded-md h-24 p-2"
            >
              <p className="lg:text-2xl truncate">{item.up}</p>
              <span className="lg:text-2xl text-sm font-bold truncate">{item.down}</span>
            </div>
          ))}
          {(items && items?.length > 0) && <div className="bg-primary rounded-md expand transition-all flex-1 hidden">
            <div className="flex justify-center items-center w-full h-full">
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
