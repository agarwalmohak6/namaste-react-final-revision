import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
// Props- properties that we pass as an argument to a functional component
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return (
          <RestaurantCard
            {...restaurant?.card?.card?.info}
            key={restaurant?.card?.card?.info.id}
          />
        );
      })}
    </div>
  );
};

export default Body;
