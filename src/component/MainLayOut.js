import {restaurantList} from "../../utils/configData"
import ResturantCard from "./ResturantCard";

const MainLayOut = () => {
    
    return (
        <div className="body-wrapper">
            <div className="search-bar">
                <input type="search" /> <button type="button">Search</button>
            </div>
            <div className="resturants-cards-container">
                {
                    restaurantList.map(resturant => <ResturantCard resturant={resturant} /> )
                }
            </div>
        </div>
    )
}

export default MainLayOut;