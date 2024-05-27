import { useContext } from "react";
import { ColContext } from '@/AppType/ColType';
import { ContentContext } from "@/AppType/ContentType";
import categories, { Art, Animal, Fiction, Mathematic, BusinessAndFinance, GeneratedType, History, Wellness, Biography, Science, Place, Textbook, Language } from "../../../../FetchData/Catagories"; 
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Link, useNavigate} from "react-router-dom";

const LeftPanel = () => {
    const router = useNavigate();
    
    const { darkMode } = useContext(ColContext);
    const { setCatagoriesValue } = useContext(ContentContext);
    
    const onSelectChange = async (value: string) => {
        console.log("You choose", value);    
        setCatagoriesValue(value);
        router(`/Catagoriespage/${value}`);
    };

    return (
        <div className="mx-[35px] h-auto">
            <div>
                <span className="text-[14px] font-semibold">Department</span>
                {Object.entries(categories).map(([category, items]) => (
                    <Select key={category} onValueChange={onSelectChange}>
                        <SelectTrigger className={`w-[180px] rounded-full text-[12px] ${darkMode ? 'bg-[#AE0614] border-black hover:bg-[#d8aef6] hover:text-black text-white': 'hover:bg-[#F6E7AE]'}`}>
                            <a>{category}</a>
                        </SelectTrigger>
                        
                        <SelectContent className={`${darkMode ? 'bg-[#AE0614] text-white': 'bg-[white] text-black'}`}>
                            <SelectGroup>
                                {items.map((item: Art | Animal | Fiction | Mathematic | BusinessAndFinance | GeneratedType | History | Wellness | Biography | Science | Place | Textbook | Language) => (
                                    <SelectItem key={item.value} value={item.value}>
                                        <Link to={`Catagoriespage/${item.title}`} className={`text-[14px] ${darkMode ? 'bg-[#AE0614] hover:bg-[#FF5A67] text-white': 'hover:bg-[#F6E7AE]'}`}>
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
