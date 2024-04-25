import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import LeftPanel from "../Resizepage/LeftPanel/LeftPanel";
import Trending from "./MidPanel/Trending";
import Cover from "./LeftPanel/Cover";
import { createContext, useState } from 'react';

export const AppContext = createContext<any>(null);

const Resizepage = () => {
    const [data, setData] = useState<[]>([]);
    
    return (
        <AppContext.Provider value={{ data, setData }}>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    defaultSize={25}
                    className="flex border-r-4 border-[#14B8A9] overflow-x-hidden lg-w-[500px]"
                >
                    <LeftPanel />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                    <div className="px-[40px] gap-[10px]">
                        <div className="w-[652px] h-[23.79px] relative">
                            <span className="w-[250px] h-[25px] absolute text-black text-2xl font-semibold font-['Overpass']">
                                Trending
                            </span>
                        </div>
                        <div className="flex my-[20px] gap-2">
                            <Trending />
                        </div>

                        <div className="w-[652px] h-[23.79px] relative">
                            <span className="w-[250px] h-[25px] absolute text-black text-2xl font-semibold font-['Overpass']">
                                Group 
                            </span>
                        </div>
                        <div className="flex my-[20px] gap-2">
                            <Cover />
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </AppContext.Provider>
    );
};

export default Resizepage;
