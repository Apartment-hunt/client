import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { UserContext } from "../../../App";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";
import DashboardStatus from "../DashboardStatus/DashboardStatus";
import MyBookingMobile from "../MyBookingMobile/MyBookingMobile";

export default function MyBooking() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userBookings, setUserBookings] = useState();
  useEffect(() => {
    Axios.get(`https://quiet-spire-34698.herokuapp.com/booking/${loggedInUser.email}`)
      .then(res => {
        setUserBookings(res.data)
      });
  }, [])
  console.log(userBookings);
  return (
    <div>
      <Row>
        <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
          <DashboardSideBar />
        </div>
        <div className="col-md-9 desktop col-sm-8 col-lg-9">
          <Row className="BookingContainer">
            <DashboardStatus pageName={{ name: "My Bookings" }} />
            <div
              className="col-md-12 my-1 mr-5 d-flex align-items-center dashboardContainer"
              style={{ backgroundColor: "#e5e5e5", height: "88vh", overflowY: "scroll", flexDirection: "column" }}
            >
              <Row
                className="bookingHeading justify-content-between align-items-center p-2 mt-2 text-center"
                style={{ backgroundColor: "#fff", borderRadius: "10px", width: "98%" }}
              >
                <div className="col-md-2">
                  <p>House Name</p>
                </div>
                <div className="col-md-3">
                  <p>Price</p>
                </div>
                <div className="col-md-2">
                  <p>Action</p>
                </div>
              </Row>
              <Row className="p-2 my-2 justify-content-between align-items-center text-center" style={{ fontSize: "0.89em", width: "98%" }}>
                {
                  !userBookings ? <p>Loadging....</p> :
                    userBookings.map(userBooking => {
                      <>
                        <div className="col-md-2">
                          <p>{userBooking.name}</p>
                        </div>
                        <div className="col-md-3">
                          <p>{userBooking.price}</p>
                        </div>
                        <div className="col-md-2">
                          <Button>View Details</Button>
                        </div>
                      </>
                    })
                }
              </Row>
            </div>
          </Row>
        </div>
        <div className="mobile col-md-9 col-sm-8 col-lg-9 dashboardContainer">
          <MyBookingMobile />
        </div>
      </Row>
    </div>
  );
}
