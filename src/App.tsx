import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Page/Homepage/Homepage';
import DetailPage from './Page/Detailpage/Detailpage';
import Catagoriespage from './Page/Catagoriespage/Catagoriespage';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/Detailpage",
            element: <DetailPage />,
        },
        {
            path: "/Catagoriespage/:catagory",
            element: <Catagoriespage />,
        },
    ]);

    return (
        <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh]">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;