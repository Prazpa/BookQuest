//Page Component
import HomePage from './Page/1_Homepage/Homepage';
import DetailPage from './Page/2_Detailpage/Detailpage';
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
    setDarkMode: () => {},
});

//Default setting of data and export to another file
export const AppContext = createContext<any>('');

function App() {
    //set state for darkmode and data
    const [darkMode, setDarkMode] = useState(false);
    const [data, setData] = useState<string>('');
    
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
            element: <DetailPage />,
        },
        {
            path: "/catagoriespage/:catagory",
            element: <Catagoriespage />,
        },
        {
            path: "/searchpage/:q",
            element: <Searchpage/>,
        },
    ]);

    return (
        <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh]">
            {/* Sent value to all file */}
            <ColContext.Provider value={{ darkMode, setDarkMode}}>
                <AppContext.Provider value={{ data, setData }}>
                    <RouterProvider router={router} />
                </AppContext.Provider> 
            </ColContext.Provider>
        </div>
    );
}

export default App;