import { useEffect, useState } from "react";
import { restaurants } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = (props) => {

    const [restaurantList, setRestaurants] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurants] = useState([]);
    const [searchText, setSearch] = useState("")
    const filterRestaurants = () => {
        let val = searchText;
        console.log(restaurantList)
        setFilteredRestaurants(restaurantList.filter(r => r.data.name.toLowerCase().includes(searchText)));
    }

    async function getRestaurant() {
        const resp = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8246756&lng=75.70952659999999&page_type=DESKTOP_WEB_LISTING');
        const json = await resp.json();
        console.log(json?.data?.cards[2]?.data?.data?.cards);
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    useEffect(() => {
        getRestaurant();
    }, [searchText])


    if(filteredRestaurantList.length == 0) return <h1> No match found</h1>

    return (<>
    <div className="search">
        <input placeholder="search" onChange={(e) => {
            setSearch(e.target.value);
            update ='fron'
        }}></input>
        <button onClick={filterRestaurants}>Filter</button>
    </div>
    {
        restaurantList.length === 0 ? <Shimmer><RestaurantCard name="" area="" avgRating = "" loading={'https://tse2.explicit.bing.net/th?id=OIP.mDk-Y23kMEyWdy-WpbswgAHaF7&pid=Api&P=0'}/></Shimmer> : (<div className="body">{
            filteredRestaurantList.map(rest => <RestaurantCard key={rest.data.id} {...rest.data} />)
        }</div>)
    }
    </>)
}

export default Body;