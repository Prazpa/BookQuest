import { Link, useNavigate, } from "react-router-dom";
import { Button } from '@/app/components/ui/button';
import { ColContext } from '@/app/settype/ColType'; 
import { ContentContext  } from '@/app/settype/ContentType';
import { useContext } from 'react';

function Trending_btn() {
    const { darkMode } = useContext(ColContext);
    const { setValue } = useContext(ContentContext);

    const router = useNavigate();

    const handleButtonClick = (newValue: string) => {
        setValue(newValue); 
        router(`/detailpage/${newValue}`); 
    };

    return (
        <div className='flex flex-wrap gap-3'>
            <Button className={`rounded-full text-[14px] 
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