import Footer from "@/MainComponent/3_Footer/Footer";
import Topbar from "../../MainComponent/1_Topbar/Topbar";
import LeftPanel from "../2_Detailpage/Contentpage/LeftPanel/LeftPanel";
import Cover from "@/Page/4_Searchpage/Cover/Cover";
import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react';

function Searchpage() {
  const { darkMode } = useContext(ColContext);
  return (
    <div className={`${darkMode ? 'bg-black' : 'bg-white'}`}>
      <Topbar />
      <div className="flex">          
        <LeftPanel />
        <Cover />
      </div>
      <Footer />
    </div>
  );
}

export default Searchpage;
