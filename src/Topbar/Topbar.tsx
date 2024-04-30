//import Detail Component
import Logoname from './Components/1_Logoname';
import Language from './Components/2_Language';
import Searchbar from './Components/3_Searchbar';
import Switch_Btn from './Components/4_Switch_Btn';
import Account from './Components/5_Account';
import Avartar from './Components/6_Avartar';
import Cart from './Components/7_Cart';

//import for Darkmode 
import { ColContext } from '@/App';
import { useContext } from 'react';


const Topbar = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  //Style
  const reponsive = ``;
  const layout = `my-[10px] w-full h-[50px] flex justify-around`;
  
  return (
    <div className={`${layout} ${reponsive} ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Logoname />
      <Language />
      <Searchbar />
      <Switch_Btn />
      <Account />
      <Avartar/>
      <Cart/>
    </div>
  );
};

export default Topbar;
