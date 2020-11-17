import { faBath, faBed, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Heading from "../Heading/Heading";
import "./RentRoom.scss";
import { getHouses } from "../../redux/actions/houseAction/houseActions";

const RentDatas = [
  { id: 0, rentImg: "https://i.ibb.co/wRFmNsg/Rectangle-394.png", rentTitle: "Washington Avenue", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 194 },
  {
    id: 1,
    rentImg: "https://i.ibb.co/x2FNXdX/Rectangle-396.png",
    rentTitle: "Family Apartment Three",
    location: "Nasirabad H/S, Chattogram",
    noBedroom: 3,
    noBathroom: 2,
    price: 356,
  },
  { id: 2, rentImg: "https://i.ibb.co/9Ys7bF1/Rectangle-398.png", rentTitle: "Gorgeous house", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 256 },
  { id: 3, rentImg: "https://i.ibb.co/0n1vNPR/Rectangle-405.png", rentTitle: "Luxury villa ", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 256 },
  { id: 4, rentImg: "https://i.ibb.co/CzdNfgF/Rectangle-403.png", rentTitle: "Epic Huda Palacio", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 256 },
  { id: 5, rentImg: "https://i.ibb.co/fdPsdrp/Rectangle-404.png", rentTitle: "Washington Avenue", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 256 },
];

export default function RentRoom() {
    // const [houses,setHouses] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getHouses());
      //eslint-disable-next-line
    },[]);
    const houses = useSelector((state) => state.HouseState.houses);
    // console.log("it's working : ",houses)
  return (
    <Container className="rentRoom pt-4 mb-4" id="rentRoom">
      <Heading sectionName="House Rent" message="Discover the latest Rent available today" />

      <Row className="mt-5 d-flex align-items-center justify-content-between">
        {
        !houses ? <p className="text-center">loading....</p> : 
        houses.map((house) => (
          <Card style={{ width: "20rem" }} key={house._id}>
            <Card.Img variant="top" src={`data:image/png;base64,${house.titileImg.img}`} alt={`${house.title}`} />
            <Card.Body>
              <Card.Title className="rentTitle">{house.title}</Card.Title>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className="ml-2">{house.location}</span>
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <p>
                  <FontAwesomeIcon icon={faBed} />
                  <span className="ml-2">{house.bedroom} Bedroom</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faBath} />
                  <span className="ml-2">{house.bathroom} Bathroom</span>
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="rentPrice">${house.price}</p>
                <Link to={{ pathname: `/singleRentRoom/${house.title}`}}>
                  <Button>View Details</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        )
        )}
      </Row>
    </Container>
  );
}
