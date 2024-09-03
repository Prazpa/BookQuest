import Logoname from './Detail/Logoname';
import Searchbar from './Detail/Searchbar';
import Switch_Btn from './Detail/Switch_Btn';
import Account from './Detail/Account';
import Avartar from './Detail/Avartar';
import Cart from './Detail/Cart';
import { DarkmodeContext } from '@/app/type/DarkmodeType';
import { useContext } from 'react';


const Topbar = () => {
  const { darkMode } = useContext(DarkmodeContext);
  const style = darkMode ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={`${style} w-full grid grid-cols-2 gap-3 px-[10px] xs:px-[5px] sm:grid-rows-2 sm:grid-flow-col sm:row-span-2 sm:justify-around md:flex md:gap-3 lg:justify-around`}>
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
