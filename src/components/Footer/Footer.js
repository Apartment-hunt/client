import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row } from "react-bootstrap";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-4 mt-3">
            <p>H#340 (4th Floor), Road #24,</p>
            <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
            <p>Phone: 018XXXXXXXX</p>
            <p>E-mail: info@company.com</p>
          </div>
          <div className="col-sm-6 col-6 col-md-2 mt-3">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/map">Site Map</a>
              </li>
              <li>
                <a href="/center">Support Center</a>
              </li>
              <li>
                <a href="/termsConditions">Terms Conditions</a>
              </li>
              <li>
                <a href="/submitLists">Submit Listing</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-6 col-md-2 mt-3">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="/rentals">Rentals</a>
              </li>
              <li>
                <a href="/sales">Sales</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/termsConditions">Terms Conditions</a>
              </li>
              <li>
                <a href="/blogs">Our blog</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-4 mt-3">
            <h5>About us</h5>
            <p className="pt-3">We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
            <div className="d-flex socialMedia">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
