import Topbar from '../../Topbar/Topbar'
import Banner from '../../Banner/Banner'
import Footer from '@/Footer/Footer'
import { Button } from '@/components/ui/button'

function Homepage() {
  return (
    <div className="flex flex-col">
      <Topbar />
      <Banner />
      <div className="flex justify-center h-[200px]">
        <Button variant="link" className="w-64 h-16 bg-[#042F2B] text-white rounded">
          <a href="http://localhost:5173/Detailpage">Get Started</a>
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage
