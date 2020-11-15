import { Button, Container, FormGroup, Row } from "react-bootstrap";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <div className="heroBanner ">
      <Container className="heroContainer d-flex align-items-center justify-content-center h-100">
        <h1 className="mb-5">FIND YOUR HOUSE RENT</h1>
        <Row>
          <FormGroup>
            <input type="text" className="fineInput mr-3" />
            <Button className="fineBtn">Find Now</Button>
          </FormGroup>
        </Row>
      </Container>
    </div>
  );
}
