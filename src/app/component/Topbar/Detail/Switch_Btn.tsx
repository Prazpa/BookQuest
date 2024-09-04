import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DarkmodeContext } from "@/app/type/DarkmodeType";
import { useContext } from "react";

const Switch_Btn = () => {
  const { darkMode, setDarkMode } = useContext(DarkmodeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex items-center space-x-2 ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <Switch
        id="darkModeSwitch"
        className={`${darkMode ? "border-zinc-300 bg-white" : "border-black"} xr:w-9 md:w-11`}
      />
      <Label
        id="LabelofDarkmodeSwitch"
        htmlFor="darkModeSwitch"
        className={`sm:space-x-1 text-[14px] font-bold ${
          darkMode ? "hover:text-[#FF5A67]" : "hover:text-[#2DD4C5]"
        }`}
      >
        {darkMode ? "Light mode" : "Dark mode"}
      </Label>
    </div>
  );
};

export default Switch_Btn;
