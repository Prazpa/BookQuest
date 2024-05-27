import Topbar from '@/MainComponent/1_Topbar/Topbar';
import Footer from '../../MainComponent/3_Footer/Footer'
import Banner from './Banner/Banner'
import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button'

function Homepage() {
  
  const { darkMode } = useContext(ColContext);

  return (
      <div className={`${darkMode ? 'bg-black' : 'bg-white'} h-auto`}>
        <Topbar />

        <div className="py-[16px] bg-[url('src/assets/bg_img1.png')] ">
          <Banner />
          <div className="flex justify-center h-[200px]">
            <Button variant="link" className={`w-48 h-14 rounded-full my-[10px] ${darkMode ? 'bg-[#FBD0D4] text-black hover:bg-[rgb(255,90,103)]' : 'bg-[#042F2B] text-white hover:bg-[#14b8a9]'}`}>
              <Link to={'/detailpage/'} className='text-[20px]'>Get Started</Link>
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
  );
}

export default Homepage
