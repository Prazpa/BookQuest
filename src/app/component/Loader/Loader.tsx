import "./Loader.css";
import { DarkmodeContext } from '@/app/type/DarkmodeType';
import { useContext } from 'react';

function Loader() {
    const { darkMode } = useContext(DarkmodeContext); 
    return (
        <div className={`lds-roller flex flex-wrap items-center mx-[400px] mt-[200px]`}>
            <div className={`${darkMode ? ' text-white' : 'text-black'}`}></div>
            <div className={`${darkMode ? ' text-white' : 'text-black'}`}></div>
            <div className={`${darkMode ? ' text-white' : 'text-black'}`}></div>
            <div className={`${darkMode ? ' text-white' : 'text-black'}`}></div>
            <div className={`${darkMode ? ' text-white' : 'text-black'}`}></div>
            <div className={`${darkMode ? ' text-white' : 'text-black'}`}></div>
            <div className={`${darkMode ? ' text-white' : 'text-black'}`}></div>
            <div className={`${darkMode ? ' text-white' : 'text-black'}`}></div>
        </div>
    )
}

export default Loader;
