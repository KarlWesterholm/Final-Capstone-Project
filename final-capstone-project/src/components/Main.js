import ReactDOM from "react-dom/client";
import { React, BrowserRouter, Routes, Route, useReducer }  from "react";
import HomePage from "./HomePage.js";
import BookingPage from "./BookingPage.js";

const Main = () => {
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/reserve" element={<BookingPage />} />
    </Routes>
    </BrowserRouter>
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
            <BookingPage times={availableTimes}/>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
export default Main;