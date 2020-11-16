import { Container, Row } from "react-bootstrap";
import BookingForm from "../BookingForm/BookingForm";
import NavBar from "../NavBar/NavBar";
import SingleApartmentDetails from "../SingleApartmentDetails/SingleApartmentDetails";
import "./SingleRentRoom.scss";

export default function SingleRentRoom() {
  return (
    <div className="singleRentApartment">
      <NavBar />
      <div className="apartmentBanner text-center d-flex justify-content-center align-items-center">
        <Container>
          <h1>Apartment</h1>
        </Container>
      </div>
      <Container className="my-4 apartmentDetails">
        <Row>
          <div className="col-sm-12 col-md-8">
            <img src="https://i.ibb.co/MM4dccT/Rectangle-406.png" alt="apartment" />
            <Row className=" mt-2 align-items-center justify-content-between">
              <div className="col-md-3 my-2">
                <img src="https://i.ibb.co/R6FzjCc/Rectangle-408.png" alt="apartment" />
              </div>
              <div className="col-md-3 my-2">
                <img src="https://i.ibb.co/QDYBgB5/Rectangle-407.png" alt="apartment" />
              </div>
              <div className="col-md-3 my-2">
                <img src="https://i.ibb.co/VDdRNzz/Rectangle-409.png" alt="apartment" />
              </div>
              <div className="col-md-3 my-2">
                <img src="https://i.ibb.co/P5fx6wd/Rectangle-410.png" alt="apartment" />
              </div>
              <SingleApartmentDetails />
            </Row>
          </div>
          <BookingForm />
        </Row>
      </Container>
    </div>
  );
}
