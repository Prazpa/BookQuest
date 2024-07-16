import Footer from "@/app/main/3_Footer/Footer";
import Topbar from "@/app/main/1_Topbar/Topbar";
import LeftPanel from "../2_Detailpage/Contentpage/LeftPanel/LeftPanel";
import Cover from "@/app/page/4_Searchpage/Cover/Cover";
import { ColContext } from '@/app/settype/ColType';
import { useContext } from 'react';

function Searchpage() {
  const { darkMode } = useContext(ColContext);
  return (
    <div className={`${darkMode ? 'bg-black' : 'bg-white'}`}>
      <Topbar />
      <div className='xr:flex xr:flex-col sm:flex-row py-2 xr:mx-[10px] sm:px-[35px] md:px-[10px]'>          
        <LeftPanel />
        <Cover />
      </div>
      <Footer />
    </div>
  );
}

export default Searchpage;
