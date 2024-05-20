//import Detail Component
import Footer from "@/MainComponent/3_Footer/Footer";
import Topbar from "../../MainComponent/1_Topbar/Topbar";
import LeftPanel from "../2_Detailpage/Contentpage/LeftPanel/LeftPanel";
import CatagoriesCover from "./CatagoriesCover/CatagoriesCover";

//import shadcn/ui component
import { Link } from "react-router-dom";

//import for useContext
import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react';

function Catagoriespage() {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  return (
    <div className={`${darkMode ? 'bg-black' : ''}`}>
      {/* Topbar section*/}
      <Topbar />

      <div>
        {/* Leftpanel */}
        <div className={`flex border-r-4 overflow-x-hidden lg-w-[500px]
            ${darkMode ? 'border-[#FF5A67]' : 'border-[#14B8A9]'}
        `}
        >
          <LeftPanel />
        </div>
        
        {/* Rightpanel */}
        <div>
          <div className="px-[20px] gap-[10px]">
            {/* Headline */}
            <div className="flex justify-between w-full">
              <span className={`w-[250px] h-[25px] text-black text-[30px] font-semibold
                ${darkMode ? 'text-white' : 'text-black '}
              `}>
                Catagories
              </span>

              <span className={`w-[250px] h-[25px] text-black text-[30px] font-semibold
                ${darkMode ? 'text-white' : 'text-black '}
              `}>
                  <Link to={`/detailpage/`}>Back</Link>
              </span>
            </div>

            <div className="py-[20px]">
              <CatagoriesCover />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Catagoriespage
