import { createContext } from "react";

interface ColType {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ColContext = createContext<ColType>({
    darkMode: false,
    setDarkMode: () => {},
});
