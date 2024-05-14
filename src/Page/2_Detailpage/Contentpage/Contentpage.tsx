//import Detail Component
import LeftPanel from "./LeftPanel/LeftPanel";
import Trending from "./RightPanel/Trending";
import Trending_btn from "./RightPanel/Trending_btn";

//import for Darkmode
import { ColContext } from '@/AppType/ColType';
import { useContext } from "react";

const Contentpage = () => {
    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);

    return (
        <div className="flex">
            <div className={`flex border-r-4 overflow-x-hidden w-[250px]
                ${darkMode ?  'border-[#FF5A67]': 'border-[#14B8A9]'}
            `}>
                <LeftPanel />
            </div>
            
        
                <div className="px-[20px] gap-[10px] w-[1030px]">
                    {/* Headline */}
                    <div className="w-[600px] h-[25px]">
                        <span className={`w-[250px] text-[30px] font-semibold ${darkMode ?  'text-white': 'text-black '}`}>
                            Trending
                        </span>
                    </div>
                    
                    {/* Trending button for sort by time */}
                    <div className="my-[30px]">
                        <Trending_btn/>
                    </div>

                    {/* Cover book of trending(default by now)*/}
                    <div className="flex my-[20px] gap-2">
                        <Trending />
                    </div>
                </div>
            
        </div>

    );
};

export default Contentpage;
