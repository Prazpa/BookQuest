//Page Component
import HomePage from './Page/1_Homepage/Homepage';
import DetailPage from './Page/2_Detailpage/Detailpage';
import TrendingAnypage from './Page/2_Detailpage/Contentpage/RightPanel/TrendingAnypage/TrendingAnypage';
import Catagoriespage from './Page/3_Catagoriespage/Catagoriespage';
import Searchpage from './Page/4_Searchpage/Searchpage';

//React component and State
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';


//set type for darkmode
interface Coltype {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

//Default setting of darkmode and export to another file
export const ColContext = createContext<Coltype>({
    darkMode: false,
    setDarkMode: () => { },
});

//Default setting of data and export to another file
export const AppContext = createContext<any>('');

//Default setting of Catagories and export to another file
export const CatagoriesContext = createContext<any>('');

//Default setting of value and export to another file
export const ValueContext = createContext<any>('');

//Default setting of pick and export to another file
export const PickContext = createContext<any>('');

//Default setting of name and export to another file
export const NameContext = createContext<any>('');

//Default setting of key and export to another file
export const KeyContext = createContext<any>('');

function App() {
    //set state for darkmode
    const [darkMode, setDarkMode] = useState(false);

    //set state for Topbar
    const [data, setData] = useState<string>('');

    //set state for Leftpanel
    const [catagoriesValue, setCatagoriesValue] = useState<any>([])

    //set state for Trending
    const [value, setValue] = useState<any>("");

    //set state for Picking
    const [pick, setPick] = useState([]);

    //set state for sign in
    const [username, setUsername] = useState("");

    //set state for cover_btn
    const [keyBook, setKeyBook] = useState([]);

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
                <AppContext.Provider value={{ data, setData }}>
                    <CatagoriesContext.Provider value={{ catagoriesValue, setCatagoriesValue }}>
                        <ValueContext.Provider value={{ value, setValue }}>
                            <PickContext.Provider value={{pick, setPick}}>
                                <NameContext.Provider value={{username, setUsername}}>
                                    <KeyContext.Provider value={{keyBook, setKeyBook}}>
                                        <RouterProvider router={router} />
                                    </KeyContext.Provider>
                                </NameContext.Provider>
                            </PickContext.Provider>
                        </ValueContext.Provider>
                    </CatagoriesContext.Provider>
                </AppContext.Provider>
            </ColContext.Provider>
        </div>
    );
}

export default App;