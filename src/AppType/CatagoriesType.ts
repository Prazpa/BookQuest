import { createContext } from "react";

//Leffpanel
interface CatagoriesType {
    catagoriesValue: string,
    setCatagoriesValue: React.Dispatch<React.SetStateAction<string>>
}

//Default setting of Catagories and export to another file
export const CatagoriesContext = createContext<CatagoriesType>({
    catagoriesValue: '',
    setCatagoriesValue: () => {}
});