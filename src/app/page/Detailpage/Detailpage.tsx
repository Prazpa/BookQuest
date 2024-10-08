import Topbar from "@/app/component/Topbar/Topbar";
import Footer from "@/app/component/Footer/Footer";
import LeftPanel from "@/app/component/LeftPanel/LeftPanel";
import RightPanel from "@/app/component/RightPanel/RightPanel";
import { useContext } from "react";
import { DarkmodeContext } from "@/app/type/DarkmodeType";

function Detailpage() {
  const { darkMode } = useContext(DarkmodeContext);

  return (
    <div className={darkMode ? "bg-black" : "bg-white"}>
      <Topbar />
      <div className="flex flex-col sm:flex-row py-2 sm:px-10 md:px-5">
        <LeftPanel />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}

export default Detailpage;
