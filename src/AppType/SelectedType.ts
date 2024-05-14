import { createContext } from "react";

interface SelectedType {
    pick: any,
    setPick: React.Dispatch<React.SetStateAction<any>>,
    keyBook: object,
    setKeyBook: Function,
}

//Default setting of pick and export to another file
export const SelectedContext = createContext<SelectedType>({
    pick: [],
    setPick: () => {},
    keyBook: [],
    setKeyBook: () => {},
});