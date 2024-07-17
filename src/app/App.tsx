import HomePage from '@/app/page/1_Homepage/Homepage';
import DetailPage from '@/app/page/2_Detailpage/Detailpage';
import TrendingAnypage from '@/app/page/2_Detailpage/Contentpage/RightPanel/TrendingAnypage/TrendingAnypage';
import Catagoriespage from '@/app/page/3_Catagoriespage/Catagoriespage';
import Searchpage from '@/app/page/4_Searchpage/Searchpage';
import Sign_Up from '@/app/page/5_Signuppage/Sign_Up';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { ColContext } from '@/app/settype/ColType';
import { ContentContext } from '@/app/settype/ContentType';
import { SelectedContext } from '@/app/settype/SelectedType'
import { UserContext } from '@/app/settype/UserType'


function App() {

    const [darkMode, setDarkMode] = useState(false);

    const [data, setData] = useState("");
    const [catagoriesValue, setCatagoriesValue] = useState("")
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
        { path: "/searchpage/:q", element: <Searchpage /> }
    ]);

    return (
        <div>
            <ColContext.Provider value={{ darkMode, setDarkMode }}>
                <ContentContext.Provider value={{ data, setData, catagoriesValue, setCatagoriesValue, value, setValue }}>
                    <UserContext.Provider value={{ username, setUsername, imageUrl, setImageUrl }}>
                        <SelectedContext.Provider value={{ pick, setPick, keyBook, setKeyBook }}>
                            <RouterProvider router={router} />
                        </SelectedContext.Provider>
                    </UserContext.Provider>
                </ContentContext.Provider>
            </ColContext.Provider>
        </div>
    );
}

export default App;