// below line we did props destructuring, like some cool developers
import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food image" />
      <h3>{name}</h3>
      <h4>{cuisines.slice(0, 3).join(", ")}</h4>
      <h5>{avgRating} Stars</h5>
    </div>
  );
};

export default RestaurantCard;
