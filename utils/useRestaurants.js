import { useEffect, useState } from "react";

const useRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredResList, setFilterResList] = useState([]);

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const resData = await data.json();
        setListOfRestaurants(resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResList(resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return {listOfRestaurants, filteredResList, setFilterResList};
}

export default useRestaurants;