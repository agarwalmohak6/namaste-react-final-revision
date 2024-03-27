import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6065883&lng=77.3694084&restaurantId=89570&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul className="menu-list">
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
          (item) => (
            <li>{item.card.info.name}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
