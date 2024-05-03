//import shadcn/ui component
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';

//import for Darkmode
import { ColContext } from '@/App';
import { useContext } from 'react';

function Avartar() {
    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);

    return (
        <div className="flex">
            <Avatar className={`self-center border-2 ${darkMode ? 'hover:border-[#FF5A67]': 'hover:border-[#2DD4C5]'}`}>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdfaz8GPft5te6NT-ZzlFahCsp5K9aw_1AA&usqp=CAU" />
                <AvatarFallback>User_img</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Avartar