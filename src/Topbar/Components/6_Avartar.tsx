//import shadcn/ui component
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';

function Avartar() {
    return (
        <div className="">
            <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdfaz8GPft5te6NT-ZzlFahCsp5K9aw_1AA&usqp=CAU" />
                <AvatarFallback>User_img</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Avartar