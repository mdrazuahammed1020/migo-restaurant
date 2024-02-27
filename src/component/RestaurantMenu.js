import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMAGE_CDN_URL } from "../../utils/constants";

const RestaurantMenu = () => {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState(null);
    useEffect(()=> {
        fetchData();
    }, [])

    async function fetchData(){
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);

        const json = await data.json();
        console.log(json.data.cards[2].card.card.info);
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    }
    return !restaurant ? <Shimmer /> : 
    (<div>
        <h2>{restaurant.name}</h2>
        <img 
        src={IMAGE_CDN_URL + restaurant.cloudinaryImageId}
        />
        <p>{restaurant.costForTwoMessage}</p>
        <p>{restaurant.cuisines.join('-')}</p>
        <p>{restaurant.city}</p>
    </div>)
}

export default RestaurantMenu;