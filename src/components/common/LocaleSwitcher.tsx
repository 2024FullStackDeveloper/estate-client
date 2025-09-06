import { Button } from "../ui/button"
import useLocalizer from "@/hooks/useLocalizer"

const LocaleSwitcher = ()=> {    
    const {lang , switchLanguage} = useLocalizer();

    return <Button 
    className="h-10 w-10 font-bold"
    onClick={()=>switchLanguage()}
    >
        {lang}
    </Button>
}


export default LocaleSwitcher;

