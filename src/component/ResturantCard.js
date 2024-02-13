    import { IMAGE_CDN_URL } from "../../utils/configData";
    const ResturantCard = ({resturant}) => {
        const
            {name,
            cloudinaryImageId,
            area,
            cuisines,
            lastMileTravelString,
            costForTwoString,
            avgRating,}
            = resturant?.data;
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
            <p>           
            <small>{lastMileTravelString}</small>{" "}
            <small>{costForTwoString}</small>
            </p>
            </div>
            </div>
        )
    }

    export default ResturantCard