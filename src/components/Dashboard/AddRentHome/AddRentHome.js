import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, FormGroup, Row } from "react-bootstrap";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";
import DashboardStatus from "../DashboardStatus/DashboardStatus";
import "./AddRentHome.scss";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { postHouse } from "../../../redux/actions/houseAction/houseActions";

export default function AddServices() {
  document.body.style.backgroundColor = "#e5e5e5";
  const [newHouse, setNewHouse] = useState();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const { title, location, bathroom, price, bedroom, file, roomDetails, propertyDetails, priceDetails } = data;
    console.log(data);
    const formData = new FormData();
    if (file) {
      if (file.length === 5) {
        for (let i = 0; i < 5; i++) {
          formData.append(`img${[i]}`, file[i]);
        }
        formData.append('title', title);
        formData.append('location', location);
        formData.append('bathroom', bathroom);
        formData.append('price', price);
        formData.append('bedroom', bedroom);
        formData.append('roomDetails', roomDetails);
        formData.append('propertyDetails', propertyDetails);
        formData.append('priceDetails', priceDetails);
        setNewHouse(formData);
      } else {
        alert("press select only 5 images");
      }
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (newHouse) {
      dispatch(postHouse(newHouse));
    }
    // eslint-disable-next-line
  }, [newHouse])
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
              <Form className="addRentHomeForm my-5" onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
                <Row>
                  <div className="col-md-6">
                    <FormGroup>
                      <Form.Label>Title</Form.Label>
                      <Form.Control required type="text" className="title" ref={register({ required: true })} name="title" placeholder="Enter title" />
                      {errors.title && <span>This field is required</span>}
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>Location</Form.Label>
                      <Form.Control className="form-control location" ref={register({ required: true })} name="location" placeholder="Enter Location" />
                      {errors.location && <span>This field is required</span>}
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>No of Bathroom</Form.Label>
                      <Form.Control required type="number" className="form-control bathroom" ref={register({ required: true })} name="bathroom" placeholder="Enter Bathroom" />
                      {errors.bathroom && <span>This field is required</span>}
                    </FormGroup>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Room Details</Form.Label>
                      <Form.Control ref={register({ required: true })} name="roomDetails" as="textarea" rows={5} />
                      {errors.roomDetails && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Price Details</Form.Label>
                      <Form.Control ref={register({ required: true })} name="priceDetails" as="textarea" rows={3} />
                      {errors.priceDetails && <span>This field is required</span>}
                    </Form.Group>

                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Form.Label>Price</Form.Label>
                      <Form.Control required type="number" className="form-control price" ref={register({ required: true })} name="price" placeholder="Enter Price" />
                      {errors.price && <span>This field is required</span>}
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>No of Bedroom</Form.Label>
                      <Form.Control required type="number" className="form-control bedroom" ref={register({ required: true })} name="bedroom" placeholder="Enter Bedroom" />
                      {errors.bedroom && <span>This field is required</span>}
                    </FormGroup>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Property Details</Form.Label>
                      <Form.Control ref={register({ required: true })} name="propertyDetails" as="textarea" rows={3} />
                      {errors.propertyDetails && <span>This field is required</span>}
                    </Form.Group>

                    <FormGroup className="fileUpload">
                      <Form.Label>Thumbnail</Form.Label>
                      <input type="file" id="upload" name="file" ref={register({ required: true })} multiple hidden />
                      {errors.file && <span>This field is required</span>}
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
