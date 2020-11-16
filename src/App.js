import "./App.scss";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleRentRoom from "./components/SingleRentRoom/SingleRentRoom";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import AddRentHome from "./components/Dashboard/AddRentHome/AddRentHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/singleRentRoom" component={SingleRentRoom} />
        <Route path="/bookingList" component={BookingList} />
        <Route path="/addRentHome" component={AddRentHome} />
      </Switch>
    </Router>
  );
}

export default App;
