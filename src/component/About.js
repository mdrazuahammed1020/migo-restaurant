import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";


const About = () => {
    return(
        <div>
            <h1>About page</h1>
            <p>this is about page..</p>
            <Outlet />
            <ProfileClass />
        </div>
    )
}

export default About;