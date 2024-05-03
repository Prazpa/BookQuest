//import Detail Component
import Footer from "@/MainComponent/Footer/Footer";
import Topbar from "../../MainComponent/Topbar/Topbar";
import LeftPanel from "../Detailpage/Resizepage/LeftPanel/LeftPanel";
import CatagoriesCover from "./CatagoriesCover/CatagoriesCover";

//import shadcn/ui component
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Catagoriespage() {
  return (
    <div>
      <Topbar />
      <div>
      <ResizablePanelGroup direction="horizontal">
            <ResizablePanel
                defaultSize={22}
                className="flex border-r-4 border-[#14B8A9] overflow-x-hidden lg-w-[500px]"
            >
                <LeftPanel />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={78}>
                <CatagoriesCover/>
            </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Footer />
    </div>
  );
}

export default Catagoriespage
