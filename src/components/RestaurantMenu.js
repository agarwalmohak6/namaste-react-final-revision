import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  console.log(categories);
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
        {(
          resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card?.itemCards ||
          resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card?.itemCards ||
          []
        ).map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{" Rs"}{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.variantsV2?.variantGroups[0]?.variations[0]
                ?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
