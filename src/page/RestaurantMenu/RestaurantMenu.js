import React, { Component } from "react";
import "./RestaurantMenu.scss";
import MenuCard from "../../component/MenuCard/MenuCard";

class RestaurantMenu extends Component {
  state = {
    menu: [
      {
        name: "Margarita Pizza",
        price: "$10",
      },
      {
        name: "Garlic Bread",
        price: "$8",
      },
      {
        name: "Pepsi",
        price: "$1",
      },
      {
        name: "Brownie",
        price: "$3",
      },
    ],
  };

  render() {
    const { menu } = this.state;
    const { restaurant } = this.props.match.params;

    return (
      <div className="restaurant-menu container-fluid">
        <h1 className="display-4 text-center my-2">{restaurant}</h1>
        <hr />

        <div className="row">
          <div className="menu-items">
            {menu.map((item, index) => (
              <MenuCard {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantMenu;
