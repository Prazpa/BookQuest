//import Detail Component
import Footer from "@/MainComponent/3_Footer/Footer";
import Topbar from "../../MainComponent/1_Topbar/Topbar";
import LeftPanel from "../2_Detailpage/Contentpage/LeftPanel/LeftPanel";
import CatagoriesCover from "./CatagoriesCover/CatagoriesCover";

//import shadcn/ui component
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Link } from "react-router-dom";

function Catagoriespage() {

  return (
    <div>
       {/* Topbar section*/}
       <Topbar />

      <ResizablePanelGroup direction="horizontal">
        {/* Leftpanel */}
        <ResizablePanel
          defaultSize={22}
          className="flex border-r-4 border-[#14B8A9] overflow-x-hidden lg-w-[500px]"
        >
          <LeftPanel />
        </ResizablePanel>
        <ResizableHandle />

        {/* Rightpanel */}
        <ResizablePanel defaultSize={78} >
          <div className="px-[20px] gap-[10px]">
            {/* Headline */}
            <div className="flex justify-between">
                <span className="w-[250px] h-[25px] text-black text-2xl font-semibold">
                  Catagories
                </span>

                <span className="w-[250px] h-[25px] text-black text-xl font-semibold">
                  <Link to={`/detailpage/`}>Back</Link>
                </span>
            </div>
            
            <div className="py-[20px]">
              <CatagoriesCover />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <Footer />
    </div>
  );
}

export default Catagoriespage
