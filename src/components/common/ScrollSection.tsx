import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "default" | "left" | "right" | "scale";
  delay?: number;
}

export const ScrollSection = ({ 
  children, 
  className, 
  animationType = "default", 
  delay = 200 
}: ScrollSectionProps) => {
  const [ref, isVisible] = useScrollReveal(0.1, "0px 0px -50px 0px");

  const getAnimationClass = () => {
    switch (animationType) {
      case "left":
        return "scroll-reveal-left";
      case "right":
        return "scroll-reveal-right";
      case "scale":
        return "scroll-reveal-scale";
      default:
        return "scroll-reveal";
    }
  };

  return (
    <section
      ref={ref}
      className={cn(
        getAnimationClass(),
        isVisible && "in-view",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};