import React, { useState } from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import LeftPanel from "../Resizepage/LeftPanel/LeftPanel";
import RightPanel from "../Resizepage/RightPanel/RightPanel";
import Cover from "./MidPanel/Cover";

const Resizepage: React.FC = () => {
    const [selectedBook, setSelectedBook] = useState<string | null>(null);

    const handleBookClick = (title: string) => {
        setSelectedBook(title);
    };

    return (
        <ResizablePanelGroup direction="horizontal">
            {/* LeftPanel */}
            <ResizablePanel
                defaultSize={20}
                className="flex border-r-4 border-[#14B8A9] overflow-x-hidden"
            >
                <LeftPanel />
            </ResizablePanel>
            <ResizableHandle />

            {/* MidPanel */}
            <ResizablePanel defaultSize={55}>
                <div className="px-[10px] gap-[10px]">
                    {/* Headline*/}
                    <div className="w-[652px] h-[23.79px] relative">
                        <span className="w-[250px] h-[25px] absolute text-black text-2xl font-semibold font-['Overpass']">
                            Books of the day
                        </span>
                    </div>

                    {/* CoverBook */}
                    <div className="flex my-[20px] gap-2 ">
                        <Cover onBookClick={handleBookClick} />
                    </div>
                </div>
            </ResizablePanel>
            <ResizableHandle />

            {/* RightPanel */}
            <ResizablePanel
                defaultSize={25}
                className="flex border-l-4 border-[#14B8A9] overflow-hidden h-auto"
            >
                <RightPanel selectedBook={selectedBook} />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default Resizepage;
