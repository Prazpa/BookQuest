//import shadcn/ui component
import { Button } from "@/components/ui/button"

function Cart() {
  return (
    <Button className="flex items-center">
      <img src="src/assets/bookmark-white.png" alt="bookmark-btn" width={'20px'} height={'30px'} className={`bg-white`}/>
      <span className="text-[16px] font-medium">Saved</span>
    </Button>
  )
}

export default Cart