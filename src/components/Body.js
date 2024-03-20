import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

// function to update restaurant list using search functionality
const filterRestaurant = (searchText, restaurants) => {
  return restaurants.filter((r) =>
    r.card?.card?.info?.name.includes(searchText)
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setrestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter data
            const data = filterRestaurant(searchText, restaurants);
            // update the state
            setrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant?.card?.card?.info}
              key={restaurant?.card?.card?.info.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
