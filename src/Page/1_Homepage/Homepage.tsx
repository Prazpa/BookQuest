//import Detail component
import Topbar from '@/MainComponent/1_Topbar/Topbar';
import Footer from '../../MainComponent/3_Footer/Footer'
import Banner from './Banner/Banner'


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
      <div className={`${darkMode ? 'bg-black' : 'bg-white'} h-auto`}>
        {/* Topbar section*/}
        <Topbar />

        {/* Banner section*/}
        <div className="h-auto bg-[url('src/assets/bg_img1.png')]">
          <Banner />
          <div className="flex justify-center h-[200px]">
            <Button variant="link" className={`w-64 h-16 bg-[#042F2B]  rounded-full my-[20px] ${darkMode ? 'invert' : ''}`}>
              <Link to={'/detailpage/'} className='text-[20px] text-white'>Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Footer section */}
        <Footer />
      </div>
  );
}

export default Homepage
