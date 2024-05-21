import Footer from "@/MainComponent/3_Footer/Footer";
import Topbar from "../../MainComponent/1_Topbar/Topbar";
import LeftPanel from "../2_Detailpage/Contentpage/LeftPanel/LeftPanel";
import CatagoriesCover from "./CatagoriesCover/CatagoriesCover";

function Catagoriespage() {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <LeftPanel />
        <CatagoriesCover />
      </div>
      <Footer />
    </div>
  );
}

export default Catagoriespage
