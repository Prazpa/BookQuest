import Topbar from '@/app/components/main/1_Topbar/Topbar'
import Footer from '@/app/components/main/3_Footer/Footer'
import LeftPanel from '../../LeftPanel/LeftPanel';
import { useContext } from 'react';
import { ColContext } from '@/app/settype/ColType';
import TrendingAny from './TrendingAny';

function TrendingAnypage() {
    const { darkMode } = useContext(ColContext);
    return (
        <div className={`${darkMode ? 'bg-black' : 'bg-white'}`}>
            <Topbar />
            <div className="flex py-2">
                <LeftPanel />
                <TrendingAny/>
            </div>
            <Footer />
        </div>
    )
}

export default TrendingAnypage;
