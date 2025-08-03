import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Login from "./Components/Login";
//import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/ProfileClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useOnline from "./Hooks/useOnline";
import UserOffline from "../code_assignments/Components/UserOffline";


const RestaurantMenu = lazy(() => import("./Components/RestaurantMenu")); // lazy loading RestaurantMenu component because it is a heavy component, loaded on demand

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/


// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  const isOnline = useOnline();


   // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [{ // nested routing
          path: "profile",
          element: <Profile />,
        }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
         path: "/restaurant/:resId",
        element: <Suspense fallback={<div>Loading...</div>}><RestaurantMenu /></Suspense>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router = {appRouter} />);