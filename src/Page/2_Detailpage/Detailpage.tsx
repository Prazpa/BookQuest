//import Detail Component
import Topbar from '../../MainComponent/1_Topbar/Topbar'
import Contentpage from './Contentpage/Contentpage';
import Footer from '../../MainComponent/3_Footer/Footer';

//import useContext for sent value
import { createContext, useState } from 'react';

//Default setting of value and export to another file
export const ValueContext = createContext<any>('');


function Detailpage() {
  //set state for value
  const [value, setValue] = useState<any>("")

  return (
    <div>
      <ValueContext.Provider value={{value, setValue}}>
        <Topbar />
        <Contentpage />
        <Footer />
      </ValueContext.Provider>
    </div>
  )
}

export default Detailpage
