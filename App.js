import React from "react";
import ReactDOM from "react-dom/client"



const Title = () => {
    return <h1>This is Title!</h1>
}

const HeadingComponent = () => (
    <div className="container">
        <Title />
        <h2>Hi i am heading2</h2>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />);