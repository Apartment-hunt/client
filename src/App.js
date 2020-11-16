import React, { createContext, useState } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import SingleRentRoom from "./components/SingleRentRoom/SingleRentRoom";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import AddRentHome from "./components/Dashboard/AddRentHome/AddRentHome";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <Router>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute exact path="/addRentHome">
            <AddRentHome />
          </PrivateRoute>
          <PrivateRoute exact path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute exact path="/singleRentRoom">
            <SingleRentRoom />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
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
