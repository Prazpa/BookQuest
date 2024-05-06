//import state and useContext
import { useContext, useEffect, useCallback, useState } from "react";
import { AppContext } from "../../../../App";

//import Detail component
import categories from "../../../../FetchData/Catagories"; 
import fetchCategory from "../../../../FetchData/Fetchcatagory";

//import shadcn/ui component
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

//import Router
import { Link, useNavigate} from "react-router-dom";

const LeftPanel = () => {
    //set router for go to next page
    const router = useNavigate();
    
    //set state for useContext to send another file
    const { setData } = useContext(AppContext);
    
    //set state for tell that selected
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    
    //fetchdata
    const handleCategoryChange = useCallback(async (value: string) => {
        try {
            const dataCatagory = await fetchCategory(value);
            setData(dataCatagory);
            console.log("Categories fetched", dataCatagory);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }, [setData]);

    //go to next page
    const onSelectChange = (value: string) => {
        console.log("You choose", value);
        router(`/Catagoriespage/${value}`)
        setSelectedCategory(value);
    };

    //track what i selected
    useEffect(() => {
        if (selectedCategory) {
            handleCategoryChange(selectedCategory);
        }
    }, [selectedCategory, handleCategoryChange]);

    return (
        <div className="mx-[15px] h-auto relative pb-10">
            <div>
                {Object.entries(categories).map(([category, items]) => (
                    <Select key={category} onValueChange={onSelectChange}>
                        <SelectTrigger className="w-[250px] rounded hover:bg-[#F6E7AE] font-['Overpass']">
                            <SelectValue placeholder={category} />
                        </SelectTrigger>
                        <SelectContent className="bg-[#99F6EE] text-black rounded">
                            <SelectGroup>
                                {items.map((item: any) => (
                                    <SelectItem key={item.value} value={item.value}>
                                        <Link to={`Catagoriespage/${item.title}`}>{item.title}</Link>
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
