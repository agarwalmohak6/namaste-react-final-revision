import React from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, isOpen, setShowIndex }) => {
  const toggleAccordion = () => {
    setShowIndex();
  };

  return (
    <div className={`restaurant-category ${isOpen ? "open" : ""}`}>
      <div className="category-header" onClick={toggleAccordion}>
        <span className="category-title">
          {data?.title} (
          {data?.itemCards?.length || data?.categories[0]?.itemCards?.length})
        </span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>⬇️</span>
      </div>
      <div className="category-content">
        <ItemList items={data?.itemCards || data?.categories[0]?.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategories;
