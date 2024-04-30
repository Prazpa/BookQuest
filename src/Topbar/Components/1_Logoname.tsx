//import for Darkmode
import { ColContext } from "@/App";
import { useContext } from "react";

//import for Router
import { Link } from "react-router-dom";

const Logoname = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  const reponsive = ``;
  const customtext = `text-[#0D9488] text-2xl font-bold font-['Overpass']`;
  
  return (
    <div className={`${customtext} ${reponsive} `}>
      <Link to={`/`} className={`${darkMode ? 'text-[#940d18]': 'text-[#0D9488]'}`}>BookQuest</Link>
    </div>
  );
};

export default Logoname;
