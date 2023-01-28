import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurants } from "../config";
import { filterRestaurants } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = (props) => {

    const [restaurantList, setRestaurants] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurants] = useState([]);
    const [searchText, setSearch] = useState("");
    const isOnline = useOnline();
    // const filterRestaurants = (searchText, restaurantList) => {
    //     let val = searchText;
    //     console.log(restaurantList)
    //     setFilteredRestaurants(restaurantList.filter(r => r.data.name.toLowerCase().includes(searchText)));
    // }

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

    if(!isOnline) {
        return <h1>Please Check your internet connection!!!</h1>
    }

    if(filteredRestaurantList.length == 0) return <h1> No match found</h1>

    return (<>
    <div className="flex justify-center p-2 bg-green-400 rounded-xl">
        <input placeholder="search" onChange={(e) => {
            setSearch(e.target.value);
            update ='fron'
        }} className="w-4/12 p-1 m-1"></input>
        <button onClick={() => {
            const data = filterRestaurants(searchText, restaurantList);
            setFilteredRestaurants(data);
        }} className="border-2 border-emerald-900 rounded-[10px] bg-green-600 px-4">Filter</button>
    </div>
    {
        filteredRestaurantList?.length === 0 ? <Shimmer></Shimmer> : (<div className="flex justify-around mt-5 flex-wrap">{
            filteredRestaurantList.map(rest => <Link to = {`/restaurants/${rest.data.id}`}><RestaurantCard key={rest.data.id} {...rest.data} /></Link>)
        }</div>)
    }
    </>)
}

export default Body;