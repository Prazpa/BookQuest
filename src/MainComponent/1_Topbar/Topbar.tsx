import Logoname from './Components/1_Logoname';
import Searchbar from './Components/2_Searchbar';
import Switch_Btn from './Components/3_Switch_Btn';
import Account from './Components/4_Account';
import Avartar from './Components/5_Avartar';
import Cart from './Components/6_Cart';
import { ColContext } from '@/AppType/ColType';
import { useContext } from 'react';


const Topbar = () => {
  const { darkMode } = useContext(ColContext);
  return (
    <div className={`w-full flex justify-around ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Logoname />
      <Searchbar />
      <Switch_Btn />
      <div className='flex gap-2'>
        <Account />
        <Avartar/>  
      </div>
      <Cart/>
    </div>
  );
};

export default Topbar;
