import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Homepage from "./Page/Homepage/Homepage"
import Detailpage from "./Page/Detailpage/Detailpage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },

  {
    path: "/Detailpage",
    element: <Detailpage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
