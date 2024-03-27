import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../config";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.length > 0 ? cuisines.join(", ") : "Restro Closed"} -{" "}
        {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul className="menu-list">
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs"} {item.card.info.price / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
