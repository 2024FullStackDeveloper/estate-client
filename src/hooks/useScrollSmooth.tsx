import { useCallback } from "react";
const useScrollSmooth = () => {
  const goTo = useCallback((element: string) => {
    const elementNode = document.getElementById(element);
    if (elementNode) {
      elementNode.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return goTo;
};

export default useScrollSmooth;
