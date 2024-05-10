//import state 
import { useContext, useEffect, useCallback, useState } from "react";

//import for Darkmode and Catagories
import { ColContext } from "@/App";
import { CatagoriesContext } from "@/App";

//import fetch component
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
    const { setCatagoriesValue } = useContext(CatagoriesContext);

    //Receive value from app.tsx
    const { darkMode } = useContext(ColContext);
    
    //set state for tell that selected  
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    
    //track what i selected and go to next page
    const onSelectChange = async (value: string) => {
        console.log("You choose", value);
        
        //set state first and navigate after
        await setSelectedCategory(value);
        router(`/Catagoriespage/${value}`);
    };

    //fetchdata
    const handleCategoryChange = useCallback(async (value: string) => {
        try {
            //receive value that i clicked and fetch 
            const dataCatagory = await fetchCategory(value);
            setCatagoriesValue(dataCatagory);
            console.log("Categories fetched", dataCatagory);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }, [setCatagoriesValue]);

    //check if i choose in <Select> tag 
    useEffect(() => {
        if (selectedCategory !== null) {
            handleCategoryChange(selectedCategory)
        }
    }, [selectedCategory, handleCategoryChange]);

    return (
        <div className="mx-[15px] h-auto  pb-10">
            <div>
                {/*Bring Object from Categories.ts for map*/}
                {Object.entries(categories).map(([category, items]) => (
                    //put them to each catagories
                    <Select key={category} onValueChange={onSelectChange}>
                        <SelectTrigger className={`
                            w-[250px] rounded text-[16px]
                            ${darkMode ? 'bg-[#AE0614] border-black hover:bg-[#d8aef6] hover:text-black text-white': 'hover:bg-[#F6E7AE]'}
                        `}>
                            <SelectValue placeholder={category} />
                        </SelectTrigger>
                        
                        {/* each catagories have subcatagories map again*/}
                        <SelectContent className={`rounded
                            ${darkMode ? 'bg-black text-white': 'bg-[white] text-black'}
                        `}>
                            
                            <SelectGroup>
                                {items.map((item: any) => (
                                    <SelectItem key={item.value} value={item.value}>
                                        <Link 
                                            to={`Catagoriespage/${item.title}`}
                                            className={`${darkMode ? 'bg-black hover:bg-[#FF5A67] text-white': 'hover:bg-[#F6E7AE]'}`}
                                        >
                                            {item.title}
                                        </Link>
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
