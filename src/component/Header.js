import { LOGO_URL } from "../../utils/constants"
const Header = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Service</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header