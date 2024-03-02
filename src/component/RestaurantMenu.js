import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMAGE_CDN_URL } from "../../utils/constants";
import useRestaurant from "../../utils/useRestaurant";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurant = useRestaurant(id);
    console.log('before render');
        
    return !restaurant ? <Shimmer /> : 
    (<div>
        <div>
        <h2>{restaurant.name}</h2>
        <img 
        src={IMAGE_CDN_URL + restaurant.cloudinaryImageId}
        />
        <p>{restaurant.costForTwoMessage}</p>
        <p>{restaurant.cuisines.join('-')}</p>
        <p>{restaurant.city}</p>
        </div>

        <div>

        </div>
    </div>)
}

export default RestaurantMenu;