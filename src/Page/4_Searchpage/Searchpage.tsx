//import Detail Component
import Footer from "@/MainComponent/3_Footer/Footer";
import Topbar from "../../MainComponent/1_Topbar/Topbar";
import LeftPanel from "../2_Detailpage/Contentpage/LeftPanel/LeftPanel";
import Cover from "@/Page/4_Searchpage/Cover/Cover";

//import shadcn/ui component
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Searchpage() {
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
                <Cover/>
            </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Footer />
    </div>
  );
}

export default Searchpage;
