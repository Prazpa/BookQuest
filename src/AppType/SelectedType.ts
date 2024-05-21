import { createContext } from "react";

interface SelectedType {
    pick: object,
    setPick: React.Dispatch<React.SetStateAction<object>>,
    keyBook: object,
    setKeyBook: React.Dispatch<React.SetStateAction<object>>,
}

export const SelectedContext = createContext<SelectedType>({
    pick: {},
    setPick: () => {},
    keyBook: [],
    setKeyBook: () => {},
});