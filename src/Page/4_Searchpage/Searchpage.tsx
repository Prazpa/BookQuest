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
//import for useContext
import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react';

function Searchpage() {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  return (
    <div className={`${darkMode ? 'bg-black' : ''}`}>
      <Topbar />
      <div>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            defaultSize={20}
            className={`flex border-r-4 overflow-x-hidden lg-w-[500px]
                    ${darkMode ? 'border-[#FF5A67]' : 'border-[#14B8A9]'}
                `}
          >
            <LeftPanel />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={80}>
            <Cover />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Footer />
    </div>
  );
}

export default Searchpage;