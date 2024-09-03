import { createContext } from "react";

interface DarkmodeType {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const DarkmodeContext = createContext<DarkmodeType>({
    darkMode: false,
    setDarkMode: () => {},
});
