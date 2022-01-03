import React, { Component } from "react";
import RestaurantCard from "../../component/RestaurantCard/RestaurantCard";
import Chatbot from "../../component/Chatbot/Chatbot";

class LandingPage extends Component {
  state = {
    restaurants: [
      {
        name: "Snappy Tomato",
        description:
          "Snappy Tomato serves the top quality meat, the freshest vegetables and the never frozen chicken breast on all items so you can enjoy the best pizza.",
      },
      {
        name: "Pizza Pizza",
        description:
          "Pizza Pizza Ltd. is a franchised Canadian pizza quick-service restaurant with its headquarters in Toronto, Ontario.",
      },
      {
        name: "Domino's Pizza",
        description:
          "Domino's Pizza, Inc., branded as Domino's, is an American multinational pizza restaurant chain founded in 1960.",
      },
      {
        name: "Pizza Hut",
        description:
          "Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney.",
      },
    ],
  };

  render() {
    const { restaurants } = this.state;

    return (
      <div className="landing-page container-fluid">
        <h1 className="display-4 text-center my-2">Halifax Foodie</h1>
        <hr />

        <div className="row">
          <div className="restaurant-holder col-md-8">
            {restaurants.map((item, index) => (
              <RestaurantCard {...item} key={index} />
            ))}
          </div>
          <div className="side-bar col-md-4 pt-2">
            <Chatbot />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
