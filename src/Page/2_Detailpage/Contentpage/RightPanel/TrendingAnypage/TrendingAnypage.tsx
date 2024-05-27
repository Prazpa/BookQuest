import Topbar from '@/MainComponent/1_Topbar/Topbar'
import Footer from '@/MainComponent/3_Footer/Footer'
import LeftPanel from '../../LeftPanel/LeftPanel';
import { useContext } from 'react';
import { ColContext } from '@/AppType/ColType';
import TrendingAny from './TrendingAny';

function TrendingAnypage() {
    const { darkMode } = useContext(ColContext);
    return (
        <div className={`${darkMode ? 'bg-black' : 'bg-white'}`}>
            <Topbar />
            <div className="flex my-[10px] gap-2">
                <LeftPanel />
                <TrendingAny/>
            </div>
            <Footer />
        </div>
    )
}

export default TrendingAnypage;
