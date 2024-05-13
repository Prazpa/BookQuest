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
import { DataContext } from '@/AppType/DataType';  
import { CatagoriesContext } from '@/AppType/CatagoriesType'   
import { ValueContext } from '@/AppType/ValueType'     
import { PickContext } from '@/AppType/PickType'    
import { NameContext } from '@/AppType/NameType'  
import { KeyContext } from '@/AppType/KeyType' 
import { AvartarContext } from '@/AppType/AvartarType' ;

function App() {
    //set state for darkmode
    const [darkMode, setDarkMode] = useState(false);

    //set state for Topbar
    const [data, setData] = useState('');

    //set state for Leftpanel
    const [catagoriesValue, setCatagoriesValue] = useState('')

    //set state for Trending
    const [value, setValue] = useState("");

    //set state for Picking
    const [pick, setPick] = useState([]);

    //set state for sign in
    const [username, setUsername] = useState("");

    //set state for cover_btn
    const [keyBook, setKeyBook] = useState([]);

    // State to store the URL of the uploaded image
    const [imageUrl, setImageUrl] = useState(""); 

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
            <DataContext.Provider value={{ data, setData }}>
            <CatagoriesContext.Provider value={{ catagoriesValue, setCatagoriesValue }}>
            <ValueContext.Provider value={{ value, setValue }}>
            <PickContext.Provider value={{pick, setPick}}>
            <NameContext.Provider value={{username, setUsername}}>
            <KeyContext.Provider value={{keyBook, setKeyBook}}>
            <AvartarContext.Provider value={{imageUrl, setImageUrl}}>
                <RouterProvider router={router} />
            </AvartarContext.Provider>
            </KeyContext.Provider>
            </NameContext.Provider>
            </PickContext.Provider>
            </ValueContext.Provider>
            </CatagoriesContext.Provider>
            </DataContext.Provider>
            </ColContext.Provider>
        </div>
    );
}

export default App;