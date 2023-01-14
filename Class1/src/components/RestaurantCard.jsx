

export const RestaurantCard = (props) => {
    let {name, area, cloudinaryImageId,deliveryTime,avgRating, loading} = props;
    return (
        <div className="rest-card">
            <img alt='rest-name' src={loading ? loading : `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}></img>
            <p>{name}</p>
            <p>{area}</p>
            <p>{avgRating}star</p>
        </div>
    )
}