import '../../App.css'
import { Topbar } from '../../Topbar/Topbar'
import { Slider } from '../../Slider/Slider'

function Homepage() {
  return (
    <div className='box'>
        <Topbar/>
        <div className="slider-container">
          <Slider/>
        </div>
    </div>
  )
}

export default Homepage
