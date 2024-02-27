import { LOGO_URL } from "../../utils/constants"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header