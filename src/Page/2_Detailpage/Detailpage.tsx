//import Detail Component
import Topbar from '@/MainComponent/1_Topbar/Topbar';
import Contentpage from './Contentpage/Contentpage';
import Footer from '../../MainComponent/3_Footer/Footer';

//import useContext for sent value
import { useContext} from 'react';

//import for Darkmode
import { ColContext } from "@/App";



function Detailpage() {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  return (
    <div className={`${darkMode ? 'bg-black': ''}`}>
         {/* Topbar section*/}
         <Topbar />

        <Contentpage /> 
        
        <Footer />
    </div>
  )
}

export default Detailpage
