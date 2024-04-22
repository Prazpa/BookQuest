import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import LeftPanel from "../Resizepage/LeftPanel/LeftPanel";
import Cover from "./MidPanel/Cover";

const Resizepage = () => {

    return (
        <ResizablePanelGroup direction="horizontal">
            {/* LeftPanel */}
            <ResizablePanel
                defaultSize={25}
                className="flex border-r-4 border-[#14B8A9] overflow-x-hidden"
            >
                <LeftPanel />
            </ResizablePanel>
            <ResizableHandle />

            {/* MidPanel */}
            <ResizablePanel defaultSize={75}>
                <div className="px-[40px] gap-[10px]">
                    {/* Headline*/}
                    <div className="w-[652px] h-[23.79px] relative">
                        <span className="w-[250px] h-[25px] absolute text-black text-2xl font-semibold font-['Overpass']">
                            Trending
                        </span>
                    </div>

                    {/* CoverBook */}
                    <div className="flex my-[20px] gap-2 ">
                        <Cover />
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default Resizepage;
