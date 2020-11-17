import { useEffect, useState } from "react";
import { Button, FormGroup } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { postBooking } from "../../redux/actions/bookingActions/bookingActions";

export default function BookingForm() {
  const [booking, setBooking] = useState()
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data,e) => {
    setBooking(data);
    e.target.reset()
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (booking) {
      dispatch(postBooking(booking))
    }
    // eslint-disable-next-line
  }, [booking])
  return (
    <div className="col-md-4 ">
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex align-items-center justify-content-center" >
        <div>
          <FormGroup>
            <input className="w-100" type="text" name="name" ref={register({ required: true })} placeholder="Full Name" />
            {errors.name && <span className="text-danger">This field is required</span>}
          </FormGroup>
          <FormGroup>
            <input className="w-100" type="number" name="phone" ref={register({ required: true })} placeholder="Phone no." />
            {errors.phone && <span className="text-danger">This field is required</span>}
          </FormGroup>
          <FormGroup>
            <input className="w-100" type="email" name="email" ref={register({ required: true })} placeholder="Enter Email" />
            {errors.email && <span className="text-danger">This field is required</span>}
          </FormGroup>
          <FormGroup>
            <textarea className="w-100" type="text" name="message" ref={register({ required: true })} placeholder="Message" />
            {errors.message && <span className="text-danger">This field is required</span>}
            <input type="hidden" name="status" ref={register} defaultValue="pending" />
          </FormGroup>
        </div>
        <Button type="submit" className="py-2 px-5">Request Booking</Button>
      </form>
    </div>
  );
}
