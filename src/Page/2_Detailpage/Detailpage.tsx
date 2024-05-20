//import Detail Component
import Topbar from '@/MainComponent/1_Topbar/Topbar';
import Footer from '../../MainComponent/3_Footer/Footer';

//import useContext for sent value
import { useContext} from 'react';

//import for Darkmode
import { ColContext } from '@/AppType/ColType';
import LeftPanel from './Contentpage/LeftPanel/LeftPanel';
import RightPanel from './Contentpage/RightPanel/RightPanel';

function Detailpage() {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  return (
    <div className={`${darkMode ? 'bg-black': ''}`}>
        {/* Topbar section*/}
        <Topbar />
        <div className='flex'>
          <LeftPanel />
          <RightPanel/>
        </div> 
        <Footer />
    </div>
  )
}

export default Detailpage
