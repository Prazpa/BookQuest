//Page Component
import HomePage from './Page/1_Homepage/Homepage';
import DetailPage from './Page/2_Detailpage/Detailpage';
import TrendingAnypage from './Page/2_Detailpage/Contentpage/RightPanel/TrendingAnypage/TrendingAnypage';
import Catagoriespage from './Page/3_Catagoriespage/Catagoriespage';
import Searchpage from './Page/4_Searchpage/Searchpage';

//React component and State
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';

//type
import { ColContext } from '@/AppType/ColType';
import { ContentContext } from './AppType/ContentType';
import { SelectedContext } from '@/AppType/SelectedType'
import { UserContext } from '@/AppType/UserType'


function App() {
    //set state for darkmode
    const [darkMode, setDarkMode] = useState(false);

    //search content
    const [data, setData] = useState(''); //set state for Topbar
    const [catagoriesValue, setCatagoriesValue] = useState('') //set state for Leftpanel
    const [value, setValue] = useState(""); //set state for Trending


    //user content
    const [username, setUsername] = useState(""); //set state for sign in
    const [imageUrl, setImageUrl] = useState(""); // State to store the URL of the uploaded image

    //selected
    const [pick, setPick] = useState([]); //set state for Picking
    const [keyBook, setKeyBook] = useState([]); //set state for cover_btn
    
    //set router for any page
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },

        {
            path: "/detailpage/",
            element: <DetailPage />,
        },

        {
            path: "/detailpage/:time",
            element: <TrendingAnypage />,
        },

        {
            path: "/catagoriespage/:catagory",
            element: <Catagoriespage />,
        },

        {
            path: "/searchpage/:q",
            element: <Searchpage />,
        },
    ]);

    return (
        <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh]">
            {/* Sent value to all file */}
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