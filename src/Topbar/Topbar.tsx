import Logoname from './Components/1_Logoname';
import Searchbar from './Components/2_Searchbar';
import ExploreBtn from './Components/3_Explorebtn';
import Account from './Components/4_Account';

const Topbar = () => {
  return (
    <div className="mx-[60px] my-[25px] w-auto h-[50px] relative">
      <Logoname />
      <Searchbar />
      <ExploreBtn />
      <Account />
    </div>
  );
};

export default Topbar;
