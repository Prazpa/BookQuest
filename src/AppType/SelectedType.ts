import { createContext } from "react";

interface SelectedType {
    pick: [],
    setPick: React.Dispatch<React.SetStateAction<any>>,
    keyBook: [],
    setKeyBook: React.Dispatch<React.SetStateAction<any>>,
}

export const SelectedContext = createContext<SelectedType>({
    pick: [],
    setPick: () => {},
    keyBook: [],
    setKeyBook: () => {},
});