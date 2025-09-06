import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { MoveDown, MoveUp, MoveUpLeft, MoveUpRight } from "lucide-react";
import useLocalizer from "@/hooks/useLocalizer";

interface AnimatedButtonProps {
  className?: string;
  label?: string;
  labelClassName?: string;
  onClick: () => void;
  isTransperent?: boolean;
  directColor?: string;
  activeDirectColor?: string;
  directArrowColor?: string;
  activeDirectArrowColor?: string;
  arrowDirection?: "up" | "down";
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  className,
  label,
  labelClassName,
  isTransperent = true,
  directColor,
  activeDirectColor,
  directArrowColor,
  activeDirectArrowColor,
  ...props
}) => {
  const { isRTL } = useLocalizer();
  const [isHover, setIsHover] = React.useState(false);

  const DefaultArrowComponent = React.useCallback(() => {
    if (!props?.arrowDirection) {
      return isRTL ? (
        <MoveUpLeft
          className={directArrowColor ?? "text-secondary"}
          size={18}
        />
      ) : (
        <MoveUpRight
          className={directArrowColor ?? "text-secondary"}
          size={18}
        />
      );
    }
    switch (props?.arrowDirection) {
      case "up":
        return (
          <MoveUp className={directArrowColor ?? "text-secondary"} size={18} />
        );

      case "down":
        return (
          <MoveDown
            className={directArrowColor ?? "text-secondary"}
            size={18}
          />
        );
    }

    return <></>;
  }, [props?.arrowDirection, isRTL, directArrowColor]);

  const ActiveArrowComponent = React.useCallback(() => {
    if (!props?.arrowDirection) {
      return isRTL ? (
        <MoveUpLeft
          size={18}
          className={
            isHover
              ? activeDirectArrowColor ?? "text-icon-hover"
              : directArrowColor ?? "text-icon"
          }
        />
      ) : (
        <MoveUpRight
          size={18}
          className={
            isHover
              ? activeDirectArrowColor ?? "text-icon-hover"
              : directArrowColor ?? "text-icon"
          }
        />
      );
    }
    switch (props?.arrowDirection) {
      case "up":
        return (
          <MoveUp
            className={
              isHover
                ? activeDirectArrowColor ?? "text-icon-hover"
                : directArrowColor ?? "text-icon"
            }
            size={18}
          />
        );

      case "down":
        return (
          <MoveDown
            className={
              isHover
                ? activeDirectArrowColor ?? "text-icon-hover"
                : directArrowColor ?? "text-icon"
            }
            size={18}
          />
        );
    }

    return <></>;
  }, [props?.arrowDirection, isRTL, directArrowColor, activeDirectArrowColor,isHover]);

  return (
    <motion.button
      className={cn(
        "h-[45px] inline-flex flex-row justify-between outline-none items-center gap-2 border-none ring-0 p-2 rounded-md cursor-pointer",
        className,
        "bg-primary",
        isTransperent && "!bg-transparent"
      )}
      {...props}
      whileHover={!isTransperent ? { scale: 1.1 } : undefined}
      whileTap={!isTransperent ? { scale: 1.1 } : undefined}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {label && (
        <span className={cn("text-lg font-bold lg:text-2xl", labelClassName)}>
          {label}
        </span>
      )}
      <div
        className={cn(
          "h-[35px] w-[35px] rounded-md flex justify-center items-center relative overflow-hidden",
          directColor ?? "bg-primary"
        )}
      >
       <DefaultArrowComponent/>
        <AnimatePresence>
          {isHover && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, top: 0 }}
              exit={{ opacity: 0 }}
              className={cn(
                "absolute  w-full flex bottom-0 rounded-md justify-center items-center z-10",
                activeDirectColor ?? "bg-destructive"
              )}
            >
              <ActiveArrowComponent/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default AnimatedButton;
