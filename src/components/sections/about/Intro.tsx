import TextDecorator from "@/components/common/TextDecorator";
import useLocalizer from "@/hooks/useLocalizer";
import { cn } from "@/lib/utils";
import React from "react";

const Intro: React.FC = () => {
  const { isRTL } = useLocalizer();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-center gap-2 h-[400px] ">
        <div
          className={cn(
            "basis-1/5 rounded-md bg-black/5 bg-cover object-cover bg-center shadow transition-all duration-200 hover:scale-110"
          )}
          style={{ backgroundImage: `url('images/building1.jpg')` }}
        />
        <div className="flex flex-row gap-2 basis-4/5  h-full rounded-md bg-black/5 p-2">
          <div className="flex flex-col gap-2 basis-1/5">
            <div
              className={cn(
                "rounded-md flex-1 bg-black bg-cover object-cover bg-center shadow transition-all duration-200 hover:scale-110"
              )}
              style={{ backgroundImage: `url('images/building2.jpg')` }}
            />
            <div
              className={cn(
                "rounded-md flex-1 bg-black bg-cover object-cover bg-center shadow transition-all duration-200 hover:scale-110"
              )}
              style={{ backgroundImage: `url('images/building3.jpg')` }}
            />
          </div>
          <div
            className={cn(
              "basis-2/5 flex bg-card justify-center items-center  rounded-md shadow transition-all duration-200 hover:scale-110"
            )}
          >
            <h2>{isRTL ? "من نحن" : "About us"}</h2>
          </div>
          <div
            className={cn(
              "basis-2/5 flex justify-center items-center rounded-md bg-cover object-cover bg-center shadow transition-all duration-200 hover:scale-105"
            )}
            style={{ backgroundImage: `url('images/building.jpg')` }}
          />
        </div>
      </div>
      <TextDecorator
        className="lg:text-4xl text-2xl font-bold my-2"
        values={[
          {
            text: isRTL ? "انت في المكان الصح" : "You're in the right place",
          },
          {
            text: isRTL ? "اعرف المزيد" : "Learn more",
          },
          {
            text: isRTL ? "عنا" : "about us",
            className: "italic font-normal bg-primary -skew-x-12 px-1 ",
          },
          {
            text: ".",
          },
        ]}
      />
    </div>
  );
};

export default Intro;
