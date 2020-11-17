import React, { createContext, useState } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleRentRoom from "./components/SingleRentRoom/SingleRentRoom";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import AddRentHome from "./components/Dashboard/AddRentHome/AddRentHome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyBooking from "./components/Dashboard/MyBooking/MyBooking";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <Router>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/addRentHome">
            <AddRentHome />
          </Route>
          {/* <PrivateRoute exact path="/addRentHome">
            <AddRentHome />
          </PrivateRoute> */}
          <Route exact path="/myBooking" component={MyBooking} />
          <PrivateRoute exact path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <Route exact path="/singleRentRoom/:title">
            <SingleRentRoom />
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
