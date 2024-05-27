import { createContext } from "react";

interface SelectedType {
    pick: any,
    setPick: React.Dispatch<React.SetStateAction<object>>,
    keyBook: any,
    setKeyBook: React.Dispatch<React.SetStateAction<object>>,
}

export const SelectedContext = createContext<SelectedType>({
    pick: [],
    setPick: () => {},
    keyBook: [],
    setKeyBook: () => {},
});