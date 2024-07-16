import Logoname from './Components/1_Logoname';
import Searchbar from './Components/2_Searchbar';
import Switch_Btn from './Components/3_Switch_Btn';
import Account from './Components/4_Account';
import Avartar from './Components/5_Avartar';
import Cart from './Components/6_Cart';
import { ColContext } from '@/app/settype/ColType';
import { useContext } from 'react';


const Topbar = () => {
  const { darkMode } = useContext(ColContext);
  const setDarkmode = `${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`
  const layout = `w-full xs:grid xs:grid-cols-2 xs:px-[10px] xr:grid xr:grid-cols-2 xr:px-[10px] sm:grid sm:grid-rows-2 sm:grid-flow-col sm:row-span-2 sm:justify-around md:flex md:px-[5px] md:gap-3 lg:justify-around`;
  return (
    <div className={`${setDarkmode} ${layout}`}>
      <Logoname />
      <Searchbar />
      <Switch_Btn />

      <div className='flex gap-2'>
        <Account />
        <Avartar />
      </div>
      
      <Cart />
    </div>
  );
};

export default Topbar;
