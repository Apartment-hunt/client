import { Form, Row } from "react-bootstrap";

export default function MobileAllServerList() {
  return (
    <>
      <div>
        <div className="dashboardContainer services p-2" style={{ fontSize: "0.8em", backgroundColor: "#fff", borderRadius: "15px" }}>
          <Row className="text-center align-items-center justify-content-center">
            <div className="col-4">
              <p>Name</p>
            </div>
            <div className="col-8">
              <p>name</p>
            </div>
            <div className="col-4">
              <p>Email</p>
            </div>
            <div className="col-8">
              <p>email</p>
            </div>
            <div className="col-4">
              <p>Phone No.</p>
            </div>
            <div className="col-8">
              <p>phone</p>
            </div>
            <div className="col-4">
              <p>Message</p>
            </div>
            <div className="col-8">
              <p>message</p>
            </div>
            <div className="col-4">
              <p>Status</p>
            </div>
            <div className="col-8">
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <select id="exampleForm.ControlSelect1" className="form-control form-control-sm" defaultValue="Pending">
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
      </div>
    </>
  );
}
