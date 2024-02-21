import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const MainLayOut = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredResList, setFilterResList] = useState([]);
    const [input, setInput] = useState('');
    function filterRestaurant(){
        let filterResList = listOfRestaurants.filter(res => res.info.avgRating > 4.3);
        setListOfRestaurants(filterResList);
    }

    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const resData = await data.json();
        setListOfRestaurants(resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResList(resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    

    return  listOfRestaurants.length === 0 ? 
    (
        <Shimmer />
    )
    :
    (
        <div className="body-wrapper">
            <div className="filter-wrapper">
                <div className="search-box">
                    <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} /> 
                    <button onClick={()=> {
                        console.log(input);
                        const filteredList = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(input.toLocaleLowerCase()));
                        setFilterResList(filteredList);
                    }}>search</button>
                </div>
                <button onClick={filterRestaurant} type="filter-button">Top rated restaurant</button>
            </div>
            <div className="data-match">
                {
                    filteredResList.length === 0 && <p>No data macth!!!!!</p>
                }
            </div>        
            <div className="resturants-cards-container">
               
                {
                    filteredResList.map(resturant => <ResturantCard key={resturant.info.id} resturant={resturant} /> )
                }
            </div>
        </div>
    )
}

export default MainLayOut;