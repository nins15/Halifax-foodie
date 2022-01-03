import React from "react";
import "./MenuCard.scss";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";

const MenuCard = ({ name, price }) => {
  return (
    <div className="menu-card card m-2 p-2">
      <div className="d-flex align-items-center justify-content-center">
        <RestaurantMenuIcon />
        <h3 className="title ms-2 mb-0">{name}</h3>
      </div>
      <span className="label mt-2">
        Price: <span className="price">{price}</span>
      </span>
      <button type="button" className="btn btn-success w-50 mt-3">
        Buy Now
      </button>
    </div>
  );
};

export default MenuCard;
