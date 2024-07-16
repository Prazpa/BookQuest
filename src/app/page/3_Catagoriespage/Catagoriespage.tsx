import Footer from "@/app/components/main/3_Footer/Footer";
import Topbar from "@/app/components/main/1_Topbar/Topbar";
import LeftPanel from "../2_Detailpage/Contentpage/LeftPanel/LeftPanel";
import CatagoriesCover from "./CatagoriesCover/CatagoriesCover";
import { ColContext } from '@/app/settype/ColType';
import { useContext } from 'react';

function Catagoriespage() {
  const { darkMode } = useContext(ColContext);

  return (
    <div className={`${darkMode ? 'bg-black' : 'bg-white '}`}>
      <Topbar />
      <div className='xr:flex xr:flex-col sm:flex-row py-2 xr:mx-[10px] sm:px-[35px] md:px-[10px]'>
        <LeftPanel/>
        <CatagoriesCover />
      </div>
      <Footer />
    </div>
  );
}

export default Catagoriespage
