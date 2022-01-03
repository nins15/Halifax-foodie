import React from "react";
import { useHistory } from "react-router";
import "./RestaurantCard.scss";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const RestaurantCard = ({ name, description }) => {
  const history = useHistory();

  const handleCardOnClick = () => {
    history.push(`/menu/${name}`);
  };

  return (
    <div className="restaurant-card card m-2 p-2" onClick={handleCardOnClick}>
      <div className="d-flex align-items-center">
        <RestaurantIcon />
        <h3 className="title ms-2 mb-0">{name}</h3>
      </div>
      <span className="label mt-2">Description:</span>
      <span className="description">{description}</span>
    </div>
  );
};

export default RestaurantCard;
