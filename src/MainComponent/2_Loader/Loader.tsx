// Link css file
import "./Loader.css"

//import for Darkmode 
import { ColContext } from '@/App';
import { useContext } from 'react';

function Loader() {

    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);
    
    return (
        <div className={`
            lds-roller flex items-center mx-[400px] mt-[200px] 
        `}>
            <div className={`${darkMode ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`${darkMode ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`${darkMode ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`${darkMode ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`${darkMode ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`${darkMode ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`${darkMode ? 'bg-white' : 'bg-black'}`}></div>
            <div className={`${darkMode ? 'bg-white' : 'bg-black'}`}></div>
        </div>
    )
}

export default Loader