import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHdd, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import "./DashboardSidebar.scss";

export default function DashboardSideBar() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#fff", marginTop: "-16px" }} className="slider">
      <div className="col-md-12 pl-5 mt-3 sliderContainer">
        <Row>
          <div className=" col-md-12 ml-2 mt-4 ">
            <Link to="/">
              <img style={{ width: "120px" }} src="https://i.ibb.co/t445Mcy/logo.png" alt="LOGO" />
            </Link>
          </div>
          <div className="col-md-12 sliderMenuContainer my-5">
            <ul className="my-5">
              <>
                <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                  <Link to="/bookingList">
                    <FontAwesomeIcon icon={faHdd} className="mr-3" />
                    Booking List
                  </Link>
                </li>
                <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                  <Link to="/addRentHome">
                    <FontAwesomeIcon icon={faPlus} className="mr-3" />
                    Add Rent Home
                  </Link>
                </li>
                <li className="my-4 col-sm-12 col-5 p-1 sliderMenu">
                  <Link to="/myBooking">
                    <FontAwesomeIcon icon={faHome} className="mr-3" />
                    My Booking
                  </Link>
                </li>
              </>
            </ul>
          </div>
        </Row>
      </div>
    </div>
  );
}
