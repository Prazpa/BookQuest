//import Detail Component
import Logoname from './Components/1_Logoname';
import Searchbar from './Components/2_Searchbar';
import Switch_Btn from './Components/3_Switch_Btn';
import Account from './Components/4_Account';
import Avartar from './Components/5_Avartar';
import Cart from './Components/6_Cart';

//import for Darkmode 
import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react';


const Topbar = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);
  
  const resposive = `
    py-[10px] px-[10px] h-auto
    xs:w-full xs:grid xs:place-items-center  
    xr:grid xr:grid-cols-2 xr:place-items-center xr:px-0      
    sm:w-full sm:flex sm:justify-around 
  `;

  return (
    <div className={`${resposive} ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Logoname />
      <Searchbar />
      <Switch_Btn />
      <div className='flex gap-2'>
        <Account />
        <Avartar/>
        <Cart/>
      </div>
    </div>
  );
};

export default Topbar;
