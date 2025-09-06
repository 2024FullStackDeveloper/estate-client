import useLocalizer from "@/hooks/useLocalizer";
import LocaleSwitcher from "./common/LocaleSwitcher";
import ThemeToggle from "./common/ThemeToggle";
import { cn } from "@/lib/utils";

const FixedSettingsBox : React.FC<{
className?:string
}> = ({
className
})=>{
const {isRTL} = useLocalizer();
return <div className={cn("flex z-20 flex-col gap-1 mt-10 fixed ",isRTL ? "-right-1" : "-left-1",className)}>
    <LocaleSwitcher/>
    <ThemeToggle/>
</div>
}

export default FixedSettingsBox;