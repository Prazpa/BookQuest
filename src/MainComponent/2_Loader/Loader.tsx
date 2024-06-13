import "./Loader.css";
import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react';

function Loader() {
    const { darkMode } = useContext(ColContext); 
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
