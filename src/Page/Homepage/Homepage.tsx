//import Detail component
import Topbar from '../../MainComponent/Topbar/Topbar'
import Banner from './Banner/Banner'
import Footer from '../../MainComponent/Footer/Footer'

//import for Darkmode 
import { ColContext } from '@/App';
import { useContext } from 'react';

//import for Router
import { Link } from "react-router-dom";

//import shadcn/ui component
import { Button } from '@/components/ui/button'


function Homepage() {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  return (
      <div className={`${darkMode ? 'bg-black' : 'bg-white'}`}>
        {/* Topbar section*/}
        <Topbar />

        {/* Banner section*/}
        <div className="h-auto bg-[url('src/assets/bg_img1.png')]">
          <Banner />
          <div className="flex justify-center h-[200px]">
            <Button variant="link" className={`w-64 h-16 bg-[#042F2B] text-white rounded-full my-[20px] ${darkMode ? 'invert' : 'bg-[#042F2B]'}`}>
              <Link to={'/Detailpage'} className='text-[20px]'>Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Footer section */}
        <Footer />
      </div>
  );
}

export default Homepage
