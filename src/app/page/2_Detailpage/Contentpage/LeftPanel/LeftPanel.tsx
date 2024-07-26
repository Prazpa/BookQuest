import { useContext } from "react";
import { ColContext } from '@/app/settype/ColType';
import { ContentContext } from "@/app/settype/ContentType";
import categories, { Art, Animal, Fiction, Mathematic, BusinessAndFinance, GeneratedType, History, Wellness, Biography, Science, Place, Textbook, Language } from "@/app/fetchData/Catagories"; 
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Link, useNavigate} from "react-router-dom";

const LeftPanel = () => {
    const router = useNavigate();
    
    const { darkMode } = useContext(ColContext);
    const { setCatagoriesValue } = useContext(ContentContext);
    
    const setDarkmode = `${darkMode ? 'bg-[#AE0614] border-black hover:bg-[#d8aef6] hover:text-black text-white': 'hover:bg-[#F6E7AE]'}`

    const onSelectChange = async (value: string) => {
        console.log("You choose", value);    
        setCatagoriesValue(value);
        router(`/Catagoriespage/${value}`);
    };


    return (
        <div className="sm:mx-[-30px] 2xl:mx-[40px] xl:mx-[0px] lg:mx-[-5px] md:mx-[10px] h-auto xr:flex xr:justify-center xs:flex xs:justify-center">
            <div className="xr:grid xr:grid-cols-2 xr:gap-x-2 xs:grid xs:grid-cols-2 xs:gap-x-2 xs:px-[10px] sm:flex sm:flex-col">
                <span className={`text-[24px] font-normal ${darkMode ? 'text-white' :'text-black'}`}>Department</span>
                {Object.entries(categories).map(([category, items]) => (
                    <Select key={category} onValueChange={onSelectChange}>
                        <SelectTrigger className={`sm:flex sm:flex-row w-[200px] rounded-xl text-[12px] my-0.5 ${setDarkmode}`}>
                            <span className="text-start">{category}</span>
                        </SelectTrigger>
                        
                        <SelectContent className={`${darkMode ? 'bg-[#AE0614] text-white': 'bg-[white] text-black'}`}>
                            <SelectGroup>
                                {items.map((item: Art | Animal | Fiction | Mathematic | BusinessAndFinance | GeneratedType | History | Wellness | Biography | Science | Place | Textbook | Language) => (
                                    <SelectItem key={item.value} value={item.value} className="flex px-1  justify-start">
                                        <Link to={`Catagoriespage/${item.title}`} className={`text-[12px] ${setDarkmode}`}>
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
