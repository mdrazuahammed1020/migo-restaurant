// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMAGE_CDN_URL } from "../../utils/constants";
import useRestaurant from "../../utils/useRestaurant";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurant = useRestaurant(id);
    console.log(id);
    console.log(restaurant);
    console.log('before render');
    // console.log('image link' + IMAGE_CDN_URL + restaurant.cloudinaryImageId);
        
    return !restaurant ? <Shimmer /> :

    (<div>
        <div className="restaurantmenu-wrapper">
        <div>
        <img 
        src={IMAGE_CDN_URL + restaurant.cloudinaryImageId}
        />
        </div>   
        <div>
        <h2>{restaurant.name}</h2>
        <h2 className="offer-header" >{restaurant.aggregatedDiscountInfo.header
        }</h2>
        
        <p>{restaurant.costForTwoMessage}</p>
        <p>{restaurant.cuisines.join('-')}</p>
        <p>{restaurant.city}</p>
        </div>
        </div>

        <div>

        </div>
    </div>)
}

export default RestaurantMenu;