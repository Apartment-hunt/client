import React from "react";
import { Button, Row } from "react-bootstrap";

export default function MyBookingMobile() {
  return (
    <div>
      <div className="dashboardContainer services p-2" style={{ fontSize: "0.8em", backgroundColor: "#fff", borderRadius: "15px" }}>
        <Row className="text-center align-items-center justify-content-center">
          <div className="col-4">
            <p>house</p>
          </div>
          <div className="col-8">
            <p>house</p>
          </div>
          <div className="col-4">
            <p>Price</p>
          </div>
          <div className="col-8">
            <p>price</p>
          </div>
          <div className="col-4">
            <p>Actions</p>
          </div>
          <div className="col-8">
            <Button>View Details</Button>
          </div>
        </Row>
      </div>
    </div>
  );
}
