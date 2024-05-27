import Topbar from '@/MainComponent/1_Topbar/Topbar';
import Footer from '../../MainComponent/3_Footer/Footer';
import LeftPanel from './Contentpage/LeftPanel/LeftPanel';
import RightPanel from './Contentpage/RightPanel/RightPanel';
import { useContext} from 'react';
import { ColContext } from '@/AppType/ColType';

function Detailpage() {
  
  const { darkMode } = useContext(ColContext);

  return (
    <div className={`${darkMode ? 'bg-black': 'bg-white'}`}>
        <Topbar />
        <div className='flex py-2'>
          <LeftPanel />
          <RightPanel/>
        </div> 
        <Footer />
    </div>
  )
}

export default Detailpage
