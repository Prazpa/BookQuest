import { createContext } from "react";

interface ValueType {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

//Default setting of value and export to another file
export const ValueContext = createContext<ValueType>({
    value: '',
    setValue: () => {},
});