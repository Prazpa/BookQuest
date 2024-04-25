import Logoname from './Components/1_Logoname';
import Searchbar from './Components/2_Searchbar';
import ExploreBtn from './Components/3_Explorebtn';
import Account from './Components/4_Account';


const Topbar = () => {
  const reponsive = `lg:px-[50px] md:px-[30px] sm:px-[20px] sm:flex-column`
  const layout = `px-[60px] my-[25px] w-full h-[50px] flex justify-between`
  return (
    <div className={`${layout} ${reponsive}`}>
      <Logoname />
      <Searchbar />
      <ExploreBtn />
      <Account />
    </div>
  );
};

export default Topbar;
