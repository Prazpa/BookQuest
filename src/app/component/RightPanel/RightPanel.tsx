import TrendingNow from "./TrendingNow/TrendingNow";
import Trending_btn from "./Button/Trending_btn";
import { DarkmodeContext } from "@/app/type/DarkmodeType";
import { useContext } from "react";

function RightPanel() {
  const { darkMode } = useContext(DarkmodeContext);

  return (
    <div className="xs:mx-[10px] xr:mx-[10px] sm:px-[20px] md:px-[20px] xl:px-[0px]">
      <span
        className={`text-[24px] font-bold ${
          darkMode ? "text-white" : "text-black "
        }`}
      >
        Trending
      </span>
      <Trending_btn />
      <div className="flex my-[10px] gap-1">
        <TrendingNow />
      </div>
    </div>
  );
}

export default RightPanel;
