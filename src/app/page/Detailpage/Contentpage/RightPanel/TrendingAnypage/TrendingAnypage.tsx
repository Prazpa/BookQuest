import Topbar from '@/app/component/Topbar/Topbar';
import Footer from '@/app/component/Footer/Footer';  
import LeftPanel from '../../LeftPanel/LeftPanel';
import { useContext } from 'react';
import { DarkmodeContext } from '@/app/type/DarkmodeType';
import TrendingAny from './TrendingAny';

function TrendingAnypage() {
    const { darkMode } = useContext(DarkmodeContext);
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
