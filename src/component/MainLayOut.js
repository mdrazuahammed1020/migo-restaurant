import { useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { searchFilter } from "../../utils/helper";
import useRestaurants from "../../utils/useRestaurants";


const MainLayOut = () => {
    const [input, setInput] = useState('');
    const {listOfRestaurants, filteredResList, setFilterResList} = useRestaurants();

    function filterRestaurant(){
        let filterResList = listOfRestaurants.filter(res => res.info.avgRating >= 4.5);
        setFilterResList(filterResList);
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
                        const filteredList = searchFilter(listOfRestaurants, input);
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