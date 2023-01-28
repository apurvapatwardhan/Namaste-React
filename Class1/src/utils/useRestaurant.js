import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (id) => {
    const [restaurantData, setRestaurantData] = useState(null);
    
    async function getRestaurantData() {
      const resp = await fetch(`${FETCH_MENU_URL}${id}`);
      const data = await resp.json();
      console.log(data);
      setRestaurantData(data);
    }
    
    useEffect(() => {
      getRestaurantData()
    }, []);

    return restaurantData;
}

export default useRestaurant;