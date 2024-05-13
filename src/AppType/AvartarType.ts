import { createContext } from "react";

interface AvartarType {
    imageUrl: string,
    setImageUrl: React.Dispatch<React.SetStateAction<string>>
}
 
//Default setting of Avartar and export to another file
export const AvartarContext = createContext<AvartarType>({
    imageUrl: '',
    setImageUrl: () => {},
});