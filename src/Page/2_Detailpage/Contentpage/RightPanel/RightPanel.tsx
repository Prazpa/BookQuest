import Trending from "./Trending/Trending"
import Trending_btn from "./Trending/Trending_btn"

//import for Darkmode
import { ColContext } from '@/AppType/ColType';
import { useContext } from "react";


function RightPanel() {
    const { darkMode } = useContext(ColContext);

    return (
        <div className="px-[20px] gap-[10px] w-[1030px]">
            {/* Headline */}
            <div className="w-[600px] h-[25px]">
                <span className={`w-[250px] text-[30px] font-semibold ${darkMode ? 'text-white' : 'text-black '}`}>
                    Trending
                </span>
            </div>

            {/* Trending button for sort by time */}
            <div className="my-[30px]">
                <Trending_btn />
            </div>

            {/* Cover book of trending(default by now)*/}
            <div className="flex my-[20px] gap-2">
                <Trending />
            </div>
        </div>
    )
}

export default RightPanel