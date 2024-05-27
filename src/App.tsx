import HomePage from './Page/1_Homepage/Homepage';
import DetailPage from './Page/2_Detailpage/Detailpage';
import TrendingAnypage from './Page/2_Detailpage/Contentpage/RightPanel/TrendingAnypage/TrendingAnypage';
import Catagoriespage from './Page/3_Catagoriespage/Catagoriespage';
import Searchpage from './Page/4_Searchpage/Searchpage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { ColContext } from '@/AppType/ColType';
import { ContentContext } from './AppType/ContentType';
import { SelectedContext } from '@/AppType/SelectedType'
import { UserContext } from '@/AppType/UserType'


function App() {
    
    const [darkMode, setDarkMode] = useState(false);
    const [data, setData] = useState(''); 
    const [catagoriesValue, setCatagoriesValue] = useState('') 
    const [value, setValue] = useState(""); 
    const [username, setUsername] = useState(""); 
    const [imageUrl, setImageUrl] = useState(""); 
    const [pick, setPick] = useState([]); 
    const [keyBook, setKeyBook] = useState({}); 
    
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
            <ColContext.Provider value={{ darkMode, setDarkMode }}>
                <ContentContext.Provider value={{ data, setData, catagoriesValue, setCatagoriesValue, value, setValue }}>
                    <UserContext.Provider value={{ username, setUsername, imageUrl, setImageUrl }}>
                        <SelectedContext.Provider value={{ pick, setPick, keyBook, setKeyBook}}>
                            <RouterProvider router={router} />
                        </SelectedContext.Provider>
                    </UserContext.Provider>
                </ContentContext.Provider>
            </ColContext.Provider>
        </div>
    );
}

export default App;