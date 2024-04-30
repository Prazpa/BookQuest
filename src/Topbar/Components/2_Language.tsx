//import shadcn/ui component
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

//import for Darkmode
import { ColContext } from "@/App";
import { useContext } from "react";

function Language() {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  return (
    <Select>
      <SelectTrigger className={`w-[80px] rounded-full border-[#D4D4D8] text-[16px] ${darkMode ? 'bg-black': 'bg-white'}`}>
        <SelectValue placeholder="EN"/>
      </SelectTrigger>
      <SelectContent className={`rounded ${darkMode ? 'bg-black text-white': 'bg-white'}`}>
        <SelectGroup>
          <SelectItem value="EN">
            <img src="src/assets/united-states.png" alt="usa" width={'20px'} height={'30px'}/>
            <span className="text-[16px]">English - EN</span>
          </SelectItem>
          
          <SelectItem value="ES">
            <img src="src/assets/spain.png" alt="usa" width={'20px'} height={'30px'}/>
            <span className="text-[16px]">Español - ES </span>
          </SelectItem>
          
          <SelectItem value="DE">
            <img src="src/assets/netherlands.png" alt="usa" width={'20px'} height={'30px'}/>
            <span className="text-[16px]">Deutsch - DE</span>
          </SelectItem>
          
          <SelectItem value="TH">
            <img src="src/assets/thailand.png" alt="usa" width={'20px'} height={'30px'}/>
            <span className="text-[16px]">Thailand- TH</span>
          </SelectItem>
          
          <SelectItem value="PT">
            <img src="src/assets/portugess.png" alt="usa" width={'20px'} height={'30px'}/>
            <span className="text-[16px]">Português - PT</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Language