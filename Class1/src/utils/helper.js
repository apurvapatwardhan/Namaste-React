export const filterRestaurants = (searchText, restaurantList) => {
    let val = searchText;
    console.log(restaurantList)
    return restaurantList.filter(r => r.data.name.toLowerCase().includes(searchText));
}