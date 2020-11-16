import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, FormGroup, Row } from "react-bootstrap";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";
import DashboardStatus from "../DashboardStatus/DashboardStatus";
import "./AddRentHome.scss";

export default function AddServices() {
  document.body.style.backgroundColor = "#e5e5e5";

  return (
    <div>
      <Row>
        <div className="col-md-4 col-sm-5 col-lg-3 pr-0">
          <DashboardSideBar />
        </div>
        <div className="col-md-8 col-sm-7 col-lg-9">
          <Row>
            <DashboardStatus pageName={{ name: "Add Rent Home" }} />
            <div className="col-md-12 my-5 dashboardContainer">
              <Form className="addRentHomeForm my-5">
                <Row>
                  <div className="col-md-6">
                    <FormGroup>
                      <Form.Label>Service Title</Form.Label>
                      <Form.Control required type="text" className="title" name="title" placeholder="Enter title" />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Location</Form.Label>
                      <Form.Control required className="form-control location" name="location" placeholder="Enter Location" />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>No of Bathroom</Form.Label>
                      <Form.Control required type="number" className="form-control bathroom" name="bathroom" placeholder="Enter Bathroom" />
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Form.Label>Price</Form.Label>
                      <Form.Control required type="number" className="form-control price" name="price" placeholder="Enter Price" />
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>No of Bedroom</Form.Label>
                      <Form.Control required type="number" className="form-control bedroom" name="bedroom" placeholder="Enter Bedroom" />
                    </FormGroup>
                    <FormGroup className="fileUpload">
                      <Form.Label>Thumbnail</Form.Label>
                      <input type="file" id="upload" hidden />
                      <label htmlFor="upload" className="uploadBtn">
                        <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image
                      </label>
                    </FormGroup>
                  </div>
                  <div className=" addRentHomeBtn mt-5 pr-5 col-sm-12 d-flex align-items-center justify-content-end">
                    <Button type="submit">submit</Button>
                  </div>
                </Row>
              </Form>
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
}
