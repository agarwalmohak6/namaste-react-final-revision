const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div>
            <span className="dish-name">{item?.card?.info?.name}</span>
            <span className="dish-price">₹
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
