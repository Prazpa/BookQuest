//import Detail Component

import LeftPanel from "./LeftPanel/LeftPanel";
import Trending from "./RightPanel/Trending";

//import shadcn/ui component
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";

//import for Darkmode 
import { ValueContext } from '@/Page/2_Detailpage/Detailpage';
import { useContext } from 'react';
import { Link } from "react-router-dom";


const Contentpage = () => {
    //Receive value from detailpage.tsx
    const { value , setValue } = useContext(ValueContext);

    //sent value of time to trending.tsx
    const handleClick = (selectvalue: string) => {
        setValue(selectvalue)
    }

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
                    <div className="w-[652px] h-[23.79px]">
                        <span className="w-[250px] h-[25px] text-black text-2xl font-semibold">
                            Trending
                        </span>
                    </div>
                    <div className="my-[20px]">
                        <Button>
                            <Link to={`/detailpage/${value}`} onClick={() => handleClick("now")}>Now</Link>
                        </Button>

                        <Button>
                            <Link to={`/detailpage/${value}`} onClick={() => handleClick("daily")}>Today</Link>
                        </Button>

                        <Button>
                            <Link to={`/detailpage/${value}`} onClick={() => handleClick("weekly")}>This Week</Link>
                        </Button>

                        <Button>
                            <Link to={`/detailpage/${value}`} onClick={() => handleClick("monthly")}>This Month</Link>
                        </Button>
                        
                        <Button>
                            <Link to={`/detailpage/${value}`} onClick={() => handleClick("yearly")}>This Year</Link>
                        </Button>
                        
                        <Button>
                            <Link to={`/detailpage/${value}`} onClick={() => handleClick("forever")}>All Time</Link>
                        </Button>
                    </div>

                    <div className="flex my-[20px] gap-2">
                        <Trending />
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>

    );
};

export default Contentpage;
