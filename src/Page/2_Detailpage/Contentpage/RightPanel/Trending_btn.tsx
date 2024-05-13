//import for router
import { Link, useNavigate, } from "react-router-dom";

//import shadcn/ui component
import { Button } from '@/components/ui/button';

//import for useContext
import { ColContext } from '@/AppType/ColType'; 
import { ValueContext  } from '@/AppType/ValueType';
import { useContext } from 'react';

function Trending_btn() {
    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);
    const { setValue } = useContext(ValueContext);

    //Additional navigate to next page
    const router = useNavigate();

    //set state when we clicked and also navigated
    const handleButtonClick = (newValue: string) => {
        setValue(newValue); // Update value context;
        router(`/detailpage/${newValue}`); // Navigate to the detail page with the new value
    };

    return (
        <div className='flex flex-wrap gap-3'>
            <Button className={`rounded-full text-[16px] 
                ${darkMode ? 'bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black' : 'bg-[#0D9488] text-white hover:bg-[#F6E7AE] hover:text-black'}
            `}>
                <Link to={`/detailpage/`}>Now</Link>
            </Button>

            <Button className={`rounded-full text-[16px] 
                ${darkMode ? 'bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black' : 'bg-[#0D9488] text-white hover:bg-[#F6E7AE] hover:text-black'}
            `} onClick={() => handleButtonClick("daily")}>
                Today
            </Button>

            <Button className={`rounded-full text-[16px] 
                ${darkMode ? 'bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black' : 'bg-[#0D9488] text-white hover:bg-[#F6E7AE] hover:text-black'}
            `} onClick={() => handleButtonClick("weekly")}>
                This Week
            </Button>

            <Button className={`rounded-full text-[16px] 
                ${darkMode ? 'bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black' : 'bg-[#0D9488] text-white hover:bg-[#F6E7AE] hover:text-black'}
            `} onClick={() => handleButtonClick("monthly")}>
                This Month
            </Button>

            <Button className={`rounded-full text-[16px] 
                ${darkMode ? 'bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black' : 'bg-[#0D9488] text-white hover:bg-[#F6E7AE] hover:text-black'}
            `} onClick={() => handleButtonClick("yearly")}>
                This Year
            </Button>

            <Button className={`rounded-full text-[16px] 
                ${darkMode ? 'bg-[#940D18] text-white hover:bg-[#d8aef6] hover:text-black' : 'bg-[#0D9488] text-white hover:bg-[#F6E7AE] hover:text-black'}
            `} onClick={() => handleButtonClick("forever")}>
                All Time
            </Button>
        </div>
    );
}

export default Trending_btn;