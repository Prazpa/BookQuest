import Footer from "@/app/component/Footer/Footer";
import Topbar from "@/app/component/Topbar/Topbar";
import LeftPanel from "../Detailpage/Contentpage/LeftPanel/LeftPanel";
import CatagoriesCover from "./CatagoriesCover/CatagoriesCover";
import { DarkmodeContext } from "@/app/type/DarkmodeType";
import { useContext } from "react";

function Catagoriespage() {
  const { darkMode } = useContext(DarkmodeContext);

  return (
    <div className={`${darkMode ? "bg-black" : "bg-white "}`}>
      <Topbar />
      <div className="xr:flex xr:flex-col sm:flex-row py-2 xr:mx-[10px] sm:px-[35px] md:px-[10px]">
        <LeftPanel />
        <CatagoriesCover />
      </div>
      <Footer />
    </div>
  );
}

export default Catagoriespage;
