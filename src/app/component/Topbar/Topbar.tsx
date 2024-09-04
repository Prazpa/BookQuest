import Logoname from "./Detail/Logoname";
import Searchbar from "./Detail/Searchbar";
import Switch_Btn from "./Detail/Switch_Btn";
import Account from "./Detail/Account";
import Avartar from "./Detail/Avartar";
import Cart from "./Detail/Cart";
import { DarkmodeContext } from "@/app/type/DarkmodeType";
import { useContext } from "react";

const Topbar = () => {
  const { darkMode } = useContext(DarkmodeContext);
  const style = darkMode ? "bg-black text-white" : "bg-gray-100 text-black";

  return (
    <div
      className={`${style} w-full md:px-3 xs:px-2 sm:px-0 xs:grid xs:grid-cols-3 xr:flex xr:items-center xr:justify-around`}
    >
      <div className="xr:flex xs:col-span-3 xs:justify-center">
        <Logoname />
      </div>

      <div className="xr:flex xs:col-span-3">
        <Searchbar />
      </div>

      <div className="xr:flex xs:col-span-1">
        <Switch_Btn />
      </div>

      <div className="xr:flex xs:col-span-1 justify-center">
        <div className="flex xs:gap-1 xr:gap-2 sm:gap-0 md:gap-2">
          <Account />
          <Avartar />
        </div>
      </div>

      <div className="xr:flex xs:col-span-1">
        <Cart />
      </div>
    </div>
  );
};

export default Topbar;
