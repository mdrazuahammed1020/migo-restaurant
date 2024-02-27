import { Link } from "react-router-dom";
import { IMAGE_CDN_URL } from "../../utils/constants";

    const ResturantCard = ({resturant}) => {
        const
            {
            id,
            name,
            cloudinaryImageId,
            locality,
            cuisines,
            costForTwo,
            lastMileTravelString,
            avgRating,}
            = resturant?.info;
        return(
            <div className="res-card-wrapper">
            <div className="card">
            <img src={IMAGE_CDN_URL + cloudinaryImageId} />
            <div className="ratings">
            <p>
                <strong>{name}</strong>
            </p>
            </div>
            <small>{cuisines.join(", ")}</small> <br /> <br />
            <span>{locality}</span>
            <p>{avgRating} ratings</p>            
            <p>
            <small>{lastMileTravelString}</small>{" "}
            <span>{costForTwo}</span>
            </p>
            </div>
            <Link to={`/restaurant/${id}/`}>View Discription</Link>
            </div>
        )
    }

    export default ResturantCard