import { LangContext } from "@/contexts/LangContext";
import React from "react";
const useLocalizer = ()=>React.useContext(LangContext);
export default useLocalizer;