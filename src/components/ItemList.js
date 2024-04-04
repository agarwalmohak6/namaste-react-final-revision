// ItemList.js
import { IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item, index) => {
    dispatch(addItem(item));
  };
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <div key={item?.card?.info?.id}>
          <div>
            <img
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              alt="food image"
              className="dish-image"
            />
            <button
              className="add-button"
              onClick={() => handleAddItem(item, index)}
            >
              Add
            </button>
            <span className="dish-name">{item?.card?.info?.name}</span>
            <span className="dish-price">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <p className="dish-description">{item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
