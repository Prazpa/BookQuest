import { createContext } from "react";

interface SelectedType {
    pick: any,
    setPick: React.Dispatch<React.SetStateAction<any>>,
    keyBook: any,
    setKeyBook: React.Dispatch<React.SetStateAction<any>>,
}

export const SelectedContext = createContext<SelectedType>({
    pick: [],
    setPick: () => {},
    keyBook: [],
    setKeyBook: () => {},
});