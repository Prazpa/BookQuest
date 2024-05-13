import { createContext } from "react";

interface KeyType {
    keyBook: object,
    setKeyBook: Function
}
//Default setting of key and export to another file
export const KeyContext = createContext<KeyType>({
    keyBook: [],
    setKeyBook: () => {},
});