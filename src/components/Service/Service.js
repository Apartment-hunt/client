import { Container, Row } from "react-bootstrap";
import Heading from "../Heading/Heading";
import "./service.scss";
const servicesData = [
  {
    id: 0,
    serviceImg: "https://i.ibb.co/3v09x18/apartment-1.png",
    serviceTitle: "Wide Range of Properties",
    serviceDescription: "With a robust selection of popular properties on hand, as well as leading properties from experts.",
  },
  {
    id: 1,
    serviceImg: "https://i.ibb.co/KmhHssb/affordable-1.png",
    serviceTitle: "Financing Made Easy",
    serviceDescription: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    id: 2,
    serviceImg: "https://i.ibb.co/nDyZPhj/lessee-1.png",
    serviceTitle: "Trusted by Thousands",
    serviceDescription: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
  },
];
export default function Service() {
  return (
    <Container className="service" id="service">
      <Heading sectionName="Services" message="We're an agency tailored to all clients' needs that always delivers" />
      <Row className="text-center mt-5 pt-5 pb-5">
        {servicesData.map((service) => (
          <div className="col-md-4 col-sm-12 serviceItems" key={service.id}>
            <img src={service.serviceImg} alt={service.serviceTitle} />
            <h4 className="pt-3">{service.serviceTitle}</h4>
            <p className="pt-2">{service.serviceDescription}</p>
          </div>
        ))}
      </Row>
    </Container>
  );
}
