import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BookingForm from "../BookingForm/BookingForm";
import NavBar from "../NavBar/NavBar";
import SingleApartmentDetails from "../SingleApartmentDetails/SingleApartmentDetails";
import axios from 'axios';
import "./SingleRentRoom.scss";
import { useParams } from "react-router-dom";

export default function SingleRentRoom() {
  const [singleRent, setSingleRent] = useState();
  const { title } = useParams();
  useEffect(() => {
    axios.get('/house/')
      .then(res => {
        const datas = res.data;
        const srent = datas.find(data => data.title === title)
        console.log(srent);
        setSingleRent(srent)
      });
  }, [])
  // console.log(singleRent);
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
          {
            !singleRent ? <p>Loading ...</p> :
              <div className="col-sm-12 col-md-8">
                <img src={`data:image/png;base64,${singleRent.titileImg.img}`} alt={`${singleRent.title}`} />
                <Row className=" mt-2 align-items-center justify-content-between">
                  <div className="col-md-3 my-2">
                    <img src={`data:image/png;base64,${singleRent.images[0].img}`} alt={`${singleRent.title}`} />
                  </div>
                  <div className="col-md-3 my-2">
                    <img src={`data:image/png;base64,${singleRent.images[1].img}`} alt={`${singleRent.title}`} />
                  </div>
                  <div className="col-md-3 my-2">
                    <img src={`data:image/png;base64,${singleRent.images[2].img}`} alt={`${singleRent.title}`} />
                  </div>
                  <div className="col-md-3 my-2">
                    <img src={`data:image/png;base64,${singleRent.images[3].img}`} alt={`${singleRent.title}`} />
                  </div>
                  <SingleApartmentDetails />
                </Row>
              </div>
          }
          <BookingForm />
        </Row>
      </Container>
    </div>
  );
}
