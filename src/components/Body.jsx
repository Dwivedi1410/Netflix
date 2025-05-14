import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import AISearch from "./AISearch";
const Body = () => {

  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/aiSearch",
      element: <AISearch />,
    },
    {
      path: "/error",
      element: <Error />,
    }
  ]);

  return <RouterProvider router={AppRouter} />;
};

export default Body;
