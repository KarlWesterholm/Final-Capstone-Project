import {React} from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = (props) => {
    return (
        <>
            <header><h1>You're all set!</h1></header>
            <h4> Thank you for your booking, {props.name}!</h4>
            <h4>We're looking forward to seeing you on {props.date} at {props.time}</h4>
            <Link to="/"><button type="button">Return to Homepage</button></Link>
        </>
    );
}

export default ConfirmedBooking;