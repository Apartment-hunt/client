import { faBath, faBed, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Container, Row } from "react-bootstrap";
import Heading from "../Heading/Heading";
import "./RentRoom.scss";

const RentDatas = [
  { rentImg: "https://i.ibb.co/wRFmNsg/Rectangle-394.png", rentTitle: "Washington Avenue", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 194 },
  { rentImg: "https://i.ibb.co/x2FNXdX/Rectangle-396.png", rentTitle: "Family Apartment Three", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 356 },
  { rentImg: "https://i.ibb.co/9Ys7bF1/Rectangle-398.png", rentTitle: "Gorgeous house", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 256 },
  { rentImg: "https://i.ibb.co/0n1vNPR/Rectangle-405.png", rentTitle: "Luxury villa ", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 256 },
  { rentImg: "https://i.ibb.co/CzdNfgF/Rectangle-403.png", rentTitle: "Epic Huda Palacio", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 256 },
  { rentImg: "https://i.ibb.co/fdPsdrp/Rectangle-404.png", rentTitle: "Washington Avenue", location: "Nasirabad H/S, Chattogram", noBedroom: 3, noBathroom: 2, price: 256 },
];

export default function RentRoom() {
  console.log(RentDatas);
  return (
    <Container className="rentRoom mt-3 mb-4" id="service">
      <Heading sectionName="House Rent" message="Discover the latest Rent available today" />

      <Row className="mt-5 d-flex align-items-center justify-content-between">
        {RentDatas.map((rentDate) => (
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={rentDate.rentImg} />
            <Card.Body>
              <Card.Title className="title">{rentDate.rentTitle}</Card.Title>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className="ml-2">{rentDate.location}</span>
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <p>
                  <FontAwesomeIcon icon={faBed} />
                  <span className="ml-2">{rentDate.noBedroom} Bedroom</span>
                </p>
                <p>
                  <FontAwesomeIcon icon={faBath} />
                  <span className="ml-2">{rentDate.noBathroom} Bathroom</span>
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p>{rentDate.price}</p>
                <Button>View Details</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
