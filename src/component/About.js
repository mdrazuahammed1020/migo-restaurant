import { Outlet } from "react-router-dom";


const About = () => {
    return(
        <div>
            <h1>About page</h1>
            <p>this is about page..</p>
            <Outlet />
        </div>
    )
}

export default About;