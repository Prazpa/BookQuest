import './App.css'
import { Topbar } from './Topbar/Topbar'
import { Slider } from './Slider/Slider'

function App() {
  return (
    <div className='box'>
        <Topbar/>
        <div className="slider-container">
          <Slider/>
        </div>
    </div>
  )
}

export default App
