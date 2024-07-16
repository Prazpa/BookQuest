import { Label } from "@/app/components/ui/label"
import { Switch } from "@/app/components/ui/switch"
import { ColContext } from '@/app/settype/ColType';
import { useContext } from 'react';

const Switch_Btn = () => {
    const { darkMode, setDarkMode } = useContext(ColContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={`flex items-center space-x-2 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            <Switch
                id="darkModeSwitch"
                className={`${darkMode ? 'border-zinc-300 bg-white' : 'border-black'}`}
            />
            <Label
                id="LabelofDarkmodeSwitch"
                htmlFor="darkModeSwitch"
                className={`sm:space-x-1 text-[14px] font-bold ${darkMode ? 'hover:text-[#FF5A67]' : 'hover:text-[#2DD4C5]'}`}
            >
                {darkMode ? "Light mode" : "Dark mode"}
            </Label>
        </div>
    );
}

export default Switch_Btn;