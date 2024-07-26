import Trending from "./Trending/Trending"
import Trending_btn from "./Trending/Trending_btn"
import { ColContext } from '@/app/settype/ColType';
import { useContext } from "react";


function RightPanel() {
    const { darkMode } = useContext(ColContext);

    return (
        <div className="xs:mx-[10px] xr:mx-[10px] sm:px-[20px] md:px-[20px] xl:px-[0px]">
            <span className={`text-[24px] font-bold ${darkMode ? 'text-white' : 'text-black '}`}>
                Trending
            </span>
            <Trending_btn />
            <div className="flex my-[10px] gap-1">
                <Trending />
            </div>
        </div>
    )
}

export default RightPanel