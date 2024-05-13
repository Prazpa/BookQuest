import { createContext } from "react";

//darkmode(all)
interface ColType {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

//Default setting of darkmode 
export const ColContext = createContext<ColType>({
    darkMode: false,
    setDarkMode: () => {},
});
