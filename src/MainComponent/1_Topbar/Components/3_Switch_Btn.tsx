//import shadcn/ui component
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

//import for Darkmode
import { ColContext } from '@/App';
import { useContext } from 'react';

const Switch_Btn = () => {
    //Receive value from app.tsx
    const { darkMode, setDarkMode } = useContext(ColContext);
    
    //Change value for darkmode = true
    const toggleDarkMode = () => {
        setDarkMode(!darkMode); 
    };

    return (
        <div className={`flex items-center space-x-2 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={toggleDarkMode}>
            <Switch id="darkModeSwitch" className={`${darkMode ? 'border-zinc-300 bg-white': 'border-black'}`}/>
            <Label htmlFor="darkModeSwitch" className={`sm:space-x-1 text-[16px] font-medium ${darkMode ? 'hover:text-[#FF5A67]': 'hover:text-[#2DD4C5]'}`}>{darkMode ? "Light mode" : "Dark mode"}</Label>
        </div>
    );
}

export default Switch_Btn;