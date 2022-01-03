import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Chat from "./component/Chat/Chat";
import LandingPage from "./page/LandingPage/LandingPage";
import RestaurantMenu from "./page/RestaurantMenu/RestaurantMenu";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/menu/:restaurant" component={RestaurantMenu} />

        <Route exact path="/user">
          <Chat currentUserType="user" loggedInUserId="user1" />
        </Route>

        <Route exact path="/admin">
          <Chat currentUserType="admin" loggedInUserId="halifax_foodie" />
        </Route>
      </Switch>
    );
  }
}

export default App;
