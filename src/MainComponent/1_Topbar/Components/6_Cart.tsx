//import shadcn/ui component
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from "@/components/ui/button"

//import for Darkmode
import { ColContext } from '@/App';
import { useContext } from 'react';

function Cart() {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="flex self-center p-0">
            <img src="src/assets/bookmark-white.png" alt="bookmark-btn" width={'20px'} height={'30px'} className={`bg-white`} />
            <span className={`text-[16px] font-medium ${darkMode ? 'hover:text-[#FF5A67]' : 'hover:text-[#2DD4C5]'}`}>Saved</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white ">
          <DialogHeader>
            <DialogTitle>Saved</DialogTitle>
            <DialogDescription>
              That book what you picked
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>

  )
}

export default Cart