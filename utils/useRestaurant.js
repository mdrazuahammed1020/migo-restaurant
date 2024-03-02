import { useEffect, useState } from "react"

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        console.log('useeffect')
        fetchData();
    }, []);

    async function fetchData(){
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);

        const json = await data.json();
        console.log('fetch data func');
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    }

    return restaurant;
}


export default useRestaurant;