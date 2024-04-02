import Logoname from "./Components/1_Logoname"
import Searchbar from "./Components/2_Searchbar"
import Explore_btn from "./Components/3_Explorebtn"
import Account from "./Components/4_Account"

const Topbar = () => {
  return (
    <div className="mx-[60px] my-[41px] w-auto h-[50px] relative">
      <Logoname/>
      <Searchbar/>
      <Explore_btn/>
      <Account/>
    </div>
  )
}

export default Topbar
