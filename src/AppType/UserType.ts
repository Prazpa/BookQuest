import { createContext } from "react";

interface UserType {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    imageUrl: string,
    setImageUrl: React.Dispatch<React.SetStateAction<string>>,
}

//Default setting of name and export to another file
export const UserContext = createContext<UserType>({
    username: '',
    setUsername: () => {},
    imageUrl: '',
    setImageUrl: () => {},
});