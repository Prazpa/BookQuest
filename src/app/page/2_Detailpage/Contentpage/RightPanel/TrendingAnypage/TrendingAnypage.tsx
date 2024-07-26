import Topbar from '@/app/main/1_Topbar/Topbar'
import Footer from '@/app/main/3_Footer/Footer'
import LeftPanel from '../../LeftPanel/LeftPanel';
import { useContext } from 'react';
import { ColContext } from '@/app/settype/ColType';
import TrendingAny from './TrendingAny';

function TrendingAnypage() {
    const { darkMode } = useContext(ColContext);
    return (
        <div className={`${darkMode ? 'bg-black' : 'bg-white'} `}>
            <Topbar />
            <div className="xr:flex xr:flex-col sm:flex-row py-2 xr:mx-[10px] sm:px-[35px] md:px-[10px]">
                <LeftPanel />
                <TrendingAny/>
            </div>
            <Footer />
        </div>
    )
}

export default TrendingAnypage;
