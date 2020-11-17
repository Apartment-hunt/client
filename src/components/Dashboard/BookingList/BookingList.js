import { Form, Row } from "react-bootstrap";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";
import DashboardStatus from "../DashboardStatus/DashboardStatus";
import MobileAllServerList from "../MobileAllServerList/MobileAllServerList";
// import "./MakeAdmin.css";

export default function BookingList() {
  document.body.style.backgroundColor = "#e5e5e5";

  return (
    <>
      <div>
        <Row>
          <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
            <DashboardSideBar />
          </div>
          <div className="col-md-9 desktop col-sm-8 col-lg-9">
            <Row className="BookingContainer">
              <DashboardStatus pageName={{ name: "All Service List" }} />
              <div
                className="col-md-12 my-1 mr-5 d-flex align-items-center dashboardContainer"
                style={{ backgroundColor: "#e5e5e5", height: "88vh", overflowY: "scroll", flexDirection: "column" }}
              >
                <Row className="bookingHeading p-2 mt-2 text-center" style={{ backgroundColor: "#fff", borderRadius: "10px", width: "98%" }}>
                  <div className="col-md-2">
                    <p>Name</p>
                  </div>
                  <div className="col-md-3">
                    <p>Email</p>
                  </div>
                  <div className="col-md-2">
                    <p>Phone No.</p>
                  </div>
                  <div className="col-md-3">
                    <p>Message</p>
                  </div>
                  <div className="col-md-2">
                    <p>Status</p>
                  </div>
                </Row>
                <Row className="p-2 my-2 text-center" style={{ fontSize: "0.89em", width: "98%" }}>
                  <div className="col-md-2">
                    <p>name</p>
                  </div>
                  <div className="col-md-3">
                    <p>email</p>
                  </div>
                  <div className="col-md-2">
                    <p>Phone</p>
                  </div>
                  <div className="col-md-3">
                    <p>message</p>
                  </div>
                  <div className="col-md-2">
                    <Form>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <select
                          id="exampleForm.ControlSelect1"
                          className="form-control form-control-sm"
                          style={{ color: "#FF4545", backgroundColor: "transparent", border: "none", boxShadow: "none" }}
                          defaultValue="Pending"
                        >
                          <option value="Pending" style={{ backgroundColor: "#fff", color: "#000" }}>
                            Pending
                          </option>
                          <option style={{ backgroundColor: "#fff", color: "#000" }}>Done</option>
                        </select>
                      </Form.Group>
                    </Form>
                  </div>
                </Row>
              </div>
            </Row>
          </div>
          <div className="mobile col-md-9 col-sm-8 col-lg-9 dashboardContainer">
            <MobileAllServerList />
          </div>
        </Row>
      </div>
    </>
  );
}
