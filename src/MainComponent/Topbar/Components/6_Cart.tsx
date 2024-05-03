//import shadcn/ui component
import { Button } from "@/components/ui/button"

//import for Darkmode
import { ColContext } from '@/App';
import { useContext } from 'react';

function Cart() {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);
  return (
    <Button className="flex self-center p-0">
      <img src="src/assets/bookmark-white.png" alt="bookmark-btn" width={'20px'} height={'30px'} className={`bg-white`}/>
      <span className={`text-[16px] font-medium ${darkMode ? 'hover:text-[#FF5A67]': 'hover:text-[#2DD4C5]'}`}>Saved</span>
    </Button>
  )
}

export default Cart