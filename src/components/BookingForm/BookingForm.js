import { Button, FormGroup } from "react-bootstrap";

export default function BookingForm() {
  return (
    <div className="col-md-4 ">
      <form className="d-flex align-items-center justify-content-center">
        <div>
          <FormGroup>
            <input className="w-100" type="text" name="name" placeholder="Full Name" />
          </FormGroup>
          <FormGroup>
            <input className="w-100" type="number" name="phone" placeholder="Phone no." />
          </FormGroup>
          <FormGroup>
            <input className="w-100" type="email" name="email" placeholder="Enter Email" />
          </FormGroup>
          <FormGroup>
            <textarea className="w-100" type="text" name="message" placeholder="Message" />
          </FormGroup>
        </div>
        <Button className="py-2 px-5">Request Booking</Button>
      </form>
    </div>
  );
}
