import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const MainLayOut = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    function filterRestaurant(){
        let filterResList = listOfRestaurants.filter(res => res.info.avgRating > 4.3);
        setListOfRestaurants(filterResList);
    }

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const resData = await data.json();
        setListOfRestaurants(resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    

    return  listOfRestaurants.length === 0 ? 
    (
        <Shimmer />
    )
    :
    (
        <div className="body-wrapper">
            <div className="filter-wrapper">
                <button onClick={filterRestaurant} type="filter-button">Top rated restaurant</button>
            </div>
            <div className="resturants-cards-container">
                {
                    listOfRestaurants.map(resturant => <ResturantCard key={resturant.info.id} resturant={resturant} /> )
                }
            </div>
        </div>
    )
}

export default MainLayOut;