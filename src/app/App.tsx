import HomePage from "@/app/page/Homepage/Homepage";
import DetailPage from "@/app/page/Detailpage/Detailpage";
import TrendingAnypage from "@/app/page/Detailpage/Contentpage/RightPanel/TrendingAnypage/TrendingAnypage";
import Catagoriespage from "@/app/page/Catagoriespage/Catagoriespage";
import Searchpage from "@/app/page/Searchpage/Searchpage";
import Sign_Up from "@/app/page/Signuppage/Sign_Up";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { DarkmodeContext } from "@/app/type/DarkmodeType";
import { ContentContext } from "@/app/type/ContentType";
import { SelectedContext } from "@/app/type/SelectedType";
import { UserContext } from "@/app/type/UserType";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [data, setData] = useState("");
  const [catagoriesValue, setCatagoriesValue] = useState("");
  const [value, setValue] = useState("");

  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [pick, setPick] = useState([]);
  const [keyBook, setKeyBook] = useState({});

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/Login", element: <Sign_Up /> },
    { path: "/detailpage/", element: <DetailPage /> },
    { path: "/detailpage/:time", element: <TrendingAnypage /> },
    { path: "/catagoriespage/:catagory", element: <Catagoriespage /> },
    { path: "/searchpage/:q", element: <Searchpage /> },
  ]);

  return (
    <div>
      <DarkmodeContext.Provider value={{ darkMode, setDarkMode }}>
        <ContentContext.Provider
          value={{
            data,
            setData,
            catagoriesValue,
            setCatagoriesValue,
            value,
            setValue,
          }}
        >
          <UserContext.Provider
            value={{ username, setUsername, imageUrl, setImageUrl }}
          >
            <SelectedContext.Provider
              value={{ pick, setPick, keyBook, setKeyBook }}
            >
              <RouterProvider router={router} />
            </SelectedContext.Provider>
          </UserContext.Provider>
        </ContentContext.Provider>
      </DarkmodeContext.Provider>
    </div>
  );
}

export default App;
