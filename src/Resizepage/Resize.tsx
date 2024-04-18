import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import LeftPanel from "../Resizepage/LeftPanel/LeftPanel";
import RightPanel from "../Resizepage/RightPanel/RightPanel";
import Cover from "./MidPanel/Cover";


const Resizepage = () => {

    

    return (
        <ResizablePanelGroup direction="horizontal">

            {/* LeftPanel */}
            <ResizablePanel defaultSize={10}>
                <div className="flex border-r-4 border-green-500 overflow-x-hidden">
                    <LeftPanel/>
                </div>
            </ResizablePanel>
            <ResizableHandle/>

            {/* MidPanel */}
            <ResizablePanel defaultSize={20}>
                <div className="px-[10px] overflow-hidden gap-[10px] ">
                    {/* Headline*/}
                    <div className="w-[652px] h-[23.79px] relative">
                        <span className="w-[250px] h-[25px] absolute text-black text-2xl font-semibold font-['Overpass']">Books of the day</span>
                        <span className="w-[100px] h-[25px] left-[500px] top-[5.55px] absolute text-neutral-400 text-lg font-normal font-['Overpass']">see more</span>
                    </div>

                    {/* CoverBook */}
                    <div className="flex my-[20px] gap-2 overflow-y-auto">
                        <Cover/>    
                    </div>

                
                </div>
            </ResizablePanel>
            <ResizableHandle/>

            {/* RightPanel */}
            <ResizablePanel defaultSize={10}>
                <div className="px-[10px] flex border-l-4 border-green-500 overflow-hidden h-auto">
                    <RightPanel/>
                </div>
            </ResizablePanel>

        </ResizablePanelGroup>

    );
}

export default Resizepage;