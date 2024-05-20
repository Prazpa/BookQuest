//React 
import React from 'react';

//import shadcn/ui component
import { Input } from '@/components/ui/input';

//import for Darkmode
import { ColContext} from "@/AppType/ColType";
import { ContentContext } from "@/AppType/ContentType";
import { useContext } from "react";

//import for Router
import { Link } from 'react-router-dom';

const Searchbar = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  //set state for input to check result of typing
  const { data, setData } = useContext(ContentContext);

  //see result after click at serach-btn
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  //sent data
  const handleSubmit = async () => {
    return data
  };

  return (
    <div>
      <form className='flex items-center'>
        <Input
          id="searchInput" 
          className={`
            h-[50px]
            border-2 border-zinc-300 rounded-[30px]
            text-normal text-[16px]
            xs:w-[130px] xs:text-[12px]
            xr:w-[150px] xr:text-[14px]
            sm:w-[155px]
            md:w-[250px]
            lg:w-[350px] 
            xl:w-[450px]
            2xl:w-[800px]
          `}
          type="text"
          placeholder="Search BookQuest"
          value={data}
          onChange={handleInputChange}
        />

        <Link to={`/searchpage/${data}`}>
          <button onClick={handleSubmit} 
            className={`
              flex items-center`
            }>
            <div className={`content-center w-10 h-10 rounded-full ${darkMode ? 'bg-[#940d18] hover:bg-[#FF5A67]' : 'bg-[#0D9488] hover:bg-[#2DD4C5]'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 50 50" fill="white">
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
            </div>
          </button>
        </Link>
      </form>


    </div>
  );
};

export default Searchbar;
