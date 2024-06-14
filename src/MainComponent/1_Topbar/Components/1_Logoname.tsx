//import for Darkmode
import { ColContext } from "@/AppType/ColType";
import { useContext } from "react";

//import for Router
import { Link } from "react-router-dom";

const Logoname = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);
  
  return (
    <div className={`flex items-center justify-center text-[20px] font-bold w-[120px]`}>
      <Link to={`/`} className={`${darkMode ? 'text-[#940d18] hover:text-[#FF5A67]': 'text-[#0D9488] hover:text-[#2DD4C5]'}`}>
        BookQuest
      </Link>
    </div>
  );
};

export default Logoname;
