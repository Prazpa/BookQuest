import { createContext } from "react";

interface NameType {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>
}

//Default setting of name and export to another file
export const NameContext = createContext<NameType>({
    username: '',
    setUsername: () => {}
});