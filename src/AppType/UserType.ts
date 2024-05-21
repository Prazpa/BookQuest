import { createContext } from "react";

interface UserType {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    imageUrl: string,
    setImageUrl: React.Dispatch<React.SetStateAction<string>>,
}

export const UserContext = createContext<UserType>({
    username: '',
    setUsername: () => {},
    imageUrl: '',
    setImageUrl: () => {},
});