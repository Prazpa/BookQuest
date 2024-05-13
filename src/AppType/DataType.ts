import { createContext } from "react";

//data(searchbar)
interface DataType {
    data: string,
    setData: React.Dispatch<React.SetStateAction<string>>
}

//Default setting of data and export to another file
export const DataContext = createContext<DataType>({
    data: '',
    setData: () => {},
});