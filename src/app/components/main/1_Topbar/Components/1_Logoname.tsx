import { ColContext } from '@/app/settype/ColType';
import { useContext } from "react";
import { Link } from "react-router-dom";

const Logoname = () => {
  const { darkMode } = useContext(ColContext);
  const setDarkmode = `${darkMode ? 'text-[#940d18] hover:text-[#FF5A67]' : 'text-[#0D9488] hover:text-[#2DD4C5]'}`

  return (
    <Link
      to={`/`}
      className={`${setDarkmode} flex items-center font-mono text-[25px] font-bold`}
    >
      BookQuest
    </Link>
  );
};

export default Logoname;
