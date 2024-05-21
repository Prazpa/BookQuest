import { createContext } from "react";

interface ContentType {
    data: string,
    setData: React.Dispatch<React.SetStateAction<string>>,
    catagoriesValue: string,
    setCatagoriesValue: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

export const ContentContext = createContext<ContentType>({
    data: '',
    setData: () => {},
    catagoriesValue: '',
    setCatagoriesValue: () => {},
    value: '',
    setValue: () => {},
});