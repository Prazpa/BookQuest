import Trending from "./Trending/Trending"
import Trending_btn from "./Trending/Trending_btn"
import { ColContext } from '@/AppType/ColType';
import { useContext } from "react";


function RightPanel() {
    const { darkMode } = useContext(ColContext);

    return (
        <div>
            <span className={`text-[24px] font-bold ${darkMode ? 'text-white' : 'text-black '}`}>
                Trending
            </span>
            <Trending_btn />
            <div className="flex my-[10px] gap-2">
                <Trending />
            </div>
        </div>
    )
}

export default RightPanel