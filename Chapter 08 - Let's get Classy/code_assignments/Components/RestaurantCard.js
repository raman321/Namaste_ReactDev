import { IMG_CDN_URL } from "../Utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = restaurantData?.info;

  return (
    <div className="restaurant-card">
      <img
        src={
          IMG_CDN_URL + cloudinaryImageId
        }
        alt={name}
        className="restaurant-logo"
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>
        <p className="cousine">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        <p className="location">{areaName}</p>
        
        <span>
          <h4>
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4>{sla.deliveryTime} mins</h4>
          <h4>{costForTwo}</h4>
        </span>

        
      </div>
    </div>
  );
};

export default RestaurantCard;