import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import MainLayOut from "./component/MainLayOut";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <MainLayOut />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />);