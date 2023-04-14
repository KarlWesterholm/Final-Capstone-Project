import { React, useReducer }  from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./HomePage.js";
import BookingPage from "./BookingPage.js";
import Construction from "./Construction.js";


const Main = () => {
    const initializeTimes = [
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00"
            ]
    const updateTimes = () => {
        return ([
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00"
        ])
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reserve" element={<BookingPage times={availableTimes}/>} />
                <Route path="/oops" element={<Construction />}/>
            </Routes>
        </>
    );
};

export default Main;