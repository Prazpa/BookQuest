import "./Loader.css";
import { DarkmodeContext } from '@/app/type/DarkmodeType';
import { useContext } from 'react';

function Loader() {
    const { darkMode } = useContext(DarkmodeContext);
    const setDarkMode = `${darkMode ? 'text-white' : 'text-black'}`;
    return (
        <div className="lds-roller flex flex-wrap items-center mx-[400px] mt-[200px]">
            {[...Array(8)].map((_, i) => (
                <div key={i} className={setDarkMode} />
            ))}
        </div>
    );
}

export default Loader;
