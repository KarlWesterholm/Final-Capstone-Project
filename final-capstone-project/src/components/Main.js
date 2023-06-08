import { React, useReducer, useState }  from "react";
import {Routes, Route} from "react-router-dom";
import {fetchAPI, submitAPI} from "./API.js";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage.js";
import BookingPage from "./BookingPage.js";
import Construction from "./Construction.js";
import ConfirmedBooking from "./ConfirmedBooking.js";


const Main = () => {
    let today = new Date()
    const [name, setName] = useState("")
    const [date, setDate] = useState(today.toDateString())
    const [time, setTime] = useState("")
    const navigate = useNavigate();

    // Function to update the times based on date selection
    const reducer = (state, action) => {
        switch (action.type) {
            case "updateTimes":
                state = fetchAPI(action.date)
                return state
            default:
                return state
            }
    };
    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            setName(formData.name)
            setDate(formData.date.toDateString())
            setTime(formData.time)
            navigate("/booking-success")
        };
    };
    const [availableTimes, dispatch] = useReducer(reducer, fetchAPI(today));
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reserve" element={<BookingPage times={availableTimes} update={dispatch} submitter={submitForm}/>} />
                <Route path="/menu" element={<Construction />} />
                <Route path="/about" element={<Construction />} />
                <Route path="/delivery" element={<Construction />} />
                <Route path="/login" element={<Construction />} />
                <Route path="/contact" element={<Construction />} />
                <Route path="/oops" element={<Construction />}/>
                <Route path="/booking-success" element={<ConfirmedBooking name={name} date={date} time={time}/>}/>
            </Routes>
        </>
    );
};

export default Main;