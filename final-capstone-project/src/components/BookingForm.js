import { React, useState, useRef } from "react";

const BookingForm = () => {
    const dateRef = useRef(null);
    const timeRef = useRef(null);
    const guestRef = useRef(null);
    const occasionRef = useRef(null)
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17")
    const [guests, setGuests] = useState("2");
    const [occasion, setOccasion] = useState("None");
    return (
        <>
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={input => setDate(input)}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" onChange={input => setTime(input)}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="2" min="2" max="10" id="guests" onChange={input => setGuests(input)}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={input => setOccasion(input)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make your reservation"/>
            </form>
        </>
    );
};

export default BookingForm;