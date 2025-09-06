import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Loader = () => {
  const delay = 0.2;
  return (
    <motion.div
      className={cn(
        "absolute flex place-items-center justify-center right-0 left-0 bg-loader w-full z-50"
      )}
      initial={{ height: 0,bottom:0 }}
      animate={{ height: '100%',top:0 }}
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-1 max-w-[140px] ">
        {Array.from({ length: 6 }, (_, index) => {
          return (
            <motion.div
              key={`key-${index + 1}`}
              className="h-10 w-10 bg-primary"
              variants={variants}
              initial={"start"}
              animate={"end"}
              transition={{
                delay: delay * index,
                repeat: Infinity,
                duration: .5,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

const variants = {
    start: {
        scale: 0.2,
        opacity:.2
    },
    end: {
       scale : 1,
       opacity:1
    },
}

export default Loader;
