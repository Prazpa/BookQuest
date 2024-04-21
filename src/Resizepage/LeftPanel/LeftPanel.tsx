import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/FetchData/Fetchdata";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import catagories from "./Catagories";

const LeftPanel = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    
    const fetchData = async (value: string) => {
        try {
            const fetchdataResponse = await axios.get(`${BASE_URL}/subjects${value}.json`);
            console.log("testLeftpanel", fetchdataResponse);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        if (selectedCategory) {
            fetchData(selectedCategory);
        }
    }, [selectedCategory]);

    const handleCategoryChange = (value: string) => {
        console.log("Selected category:", value);
        setSelectedCategory(value);
    };


    return (
        <div className={`mx-[56px] h-auto relative`}>
            <div className="w-[200px] h-screen">
            {Object.entries(catagories).map(([category, items]) => (
                <Select key={category} onValueChange={handleCategoryChange}>
                    <SelectTrigger className="w-[200px] rounded hover:bg-[#F6E7AE] font-['Overpass']">
                        <SelectValue placeholder={category} />
                    </SelectTrigger>
                    <SelectContent
                        className="bg-black text-white rounded"
                    >
                        <SelectGroup>
                            {items.map((item) => (
                                <SelectItem key={item.title} value={item.value} className="hover:bg-[#F9EFCB]">{item.title}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            ))}
            </div>
        </div>
    );
};

export default LeftPanel;
