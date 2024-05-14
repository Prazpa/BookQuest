import { createContext } from "react";

//data(searchbar)
interface ContentType {
    data: string,
    setData: React.Dispatch<React.SetStateAction<string>>,
    catagoriesValue: string,
    setCatagoriesValue: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

//Default setting of data and export to another file
export const ContentContext = createContext<ContentType>({
    data: '',
    setData: () => {},
    catagoriesValue: '',
    setCatagoriesValue: () => {},
    value: '',
    setValue: () => {},
});