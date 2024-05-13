import { createContext } from "react";

interface PickType {
    pick: object,
    setPick: Function,
}

//Default setting of pick and export to another file
export const PickContext = createContext<PickType>({
    pick: [],
    setPick: () => {},
});