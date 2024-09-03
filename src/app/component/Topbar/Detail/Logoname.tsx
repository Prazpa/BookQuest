import { DarkmodeContext } from '@/app/type/DarkmodeType';
import { useContext } from "react";
import { Link } from "react-router-dom";

const Logoname = () => {
  const { darkMode } = useContext(DarkmodeContext);
  const setDarkmode = `${darkMode ? 'text-[#940d18] hover:text-[#FF5A67]' : 'text-[#0D9488] hover:text-[#2DD4C5]'}`;

  return (
    <Link
      to={`/`}
      className={`${setDarkmode} flex items-center text-[25px] font-bold`}
    >
      BookQuest
    </Link>
  );
};

export default Logoname;
