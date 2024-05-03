//import Detail Component
import LeftPanel from "../Resizepage/LeftPanel/LeftPanel";
import Trending from "./RightPanel/Trending";

//import shadcn/ui component
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

const Resizepage = () => {
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel
                defaultSize={22}
                className="flex border-r-4 border-[#14B8A9] overflow-x-hidden lg-w-[500px]"
            >
                <LeftPanel />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={78}>
                <div className="px-[20px] gap-[10px]">
                    <div className="w-[652px] h-[23.79px] relative">
                        <span className="w-[250px] h-[25px] absolute text-black text-2xl font-semibold">
                            Trending
                        </span>
                    </div>
                    <div className="flex my-[20px] gap-2">
                        <Trending />
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>

    );
};

export default Resizepage;
