import {React} from "react";

const ConfirmedBooking = (props) => {
    return (
        <>
            <header><h1>You're all set!</h1></header>
            <h4> Thank you for your booking {props.name}!</h4>
            <h4>We're looking forward to seeing you on {props.date} at {props.time}</h4>
        </>
    );
}

export default ConfirmedBooking;