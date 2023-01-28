import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useRestaurant from '../utils/useRestaurant';

function RestaurantMenu() {
  const {id} = useParams();
   
  const restaurant = useRestaurant(id);

  return (
    <div>
      Menu {id}
    </div>
  )
}

export default RestaurantMenu
