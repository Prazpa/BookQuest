import { useContext, useEffect, useCallback, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import categories from "./Catagories"; 
import fetchCategory from "../../FetchData/Fetchcatagory";
import { AppContext } from "../Resize";

const LeftPanel = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const { setData } = useContext(AppContext);
    
    const handleCategoryChange = useCallback(async (value: string) => {
        try {
            const data_1 = await fetchCategory(value);
            setData(data_1);
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [setData]);

    const onSelectChange = (value: string) => {
        setSelectedCategory(value);
    };

    useEffect(() => {
        if (selectedCategory) {
            handleCategoryChange(selectedCategory);
        }
    }, [selectedCategory, handleCategoryChange]);

    return (
        <div className="mx-[56px] h-auto relative pb-10">
            <div>
                {Object.entries(categories).map(([category, items]) => (
                    <Select key={category} onValueChange={onSelectChange}>
                        <SelectTrigger className="w-[250px] rounded hover:bg-[#F6E7AE] font-['Overpass'] text-white">
                            <SelectValue placeholder={category} />
                        </SelectTrigger>
                        <SelectContent className="bg-[#99F6EE] text-black rounded">
                            <SelectGroup>
                                {items.map((item) => (
                                    <SelectItem key={item.value} value={item.value}>
                                        <span>{item.title}</span>
                                    </SelectItem>
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
