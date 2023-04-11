import React from "react";
import BookingForm from "./BookingForm.js"

const BookingPage = (props) => {
    return (
        <>
            <header>
                <h1>Table Reservation</h1>
            </header>
            <BookingForm {...props}/>
        </>
    );
};

export default BookingPage;