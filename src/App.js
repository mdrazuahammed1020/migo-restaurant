import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import MainLayOut from "./component/MainLayOut";
import Footer from "./component/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./component/Error";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import RestaurantMenu from "./component/RestaurantMenu";
import Profile from "./component/Profile";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <MainLayOut />
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path:'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);