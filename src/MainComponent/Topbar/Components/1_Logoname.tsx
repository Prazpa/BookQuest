//import for Darkmode
import { ColContext } from "@/App";
import { useContext } from "react";

//import for Router
import { Link } from "react-router-dom";

const Logoname = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);
  
  return (
    <div 
      className={`
        text-2xl font-bold font-['Overpass'] 
        flex items-center
        xs-text-lg
        xr:text-lg
        sm:text-lg 
        md:text-lg 
        lg:text-xl 
        2xl:
        `
      }>
      <Link to={`/`} className={`${darkMode ? 'text-[#940d18] hover:text-[#FF5A67]': 'text-[#0D9488] hover:text-[#2DD4C5]'}`}>BookQuest</Link>
    </div>
  );
};

export default Logoname;
