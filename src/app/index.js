import Main from "./main";
import Basket from "./basket";
import useSelector from "../store/use-selector";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Product from "./product";

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      Component: Main,
    },
    {
      path: '/:productId',
      Component: Product,
    }
  ]);



  return <RouterProvider router={router}/>;
}

export default App;
