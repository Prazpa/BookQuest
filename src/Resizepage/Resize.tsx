import LeftPanel from "@/LeftPanel/LeftPanel"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

function Resizepage() {
    return (
        <div className="relative">
            <ResizablePanelGroup
                direction="horizontal"
                className="w-[1216px] rounded"
            >
                <ResizablePanel>
                    <div className="flex border-r-4 border-green-500 overflow-hidden h-auto">
                        <LeftPanel/>
                    </div>
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel>
                    <div className="flex h-[200px] justify-center ">
                        <span className="font-semibold">One</span>
                    </div>
                </ResizablePanel>

                <ResizableHandle />
                <ResizablePanel >
                    <div className="flex h-[200px] border-l-4 border-green-500">
                        <span className="font-semibold">One</span>
                    </div>
                </ResizablePanel>

            </ResizablePanelGroup>
        </div>



    )
}

export default Resizepage