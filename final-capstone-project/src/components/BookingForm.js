import { React, useState, useEffect } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17")
    const [guests, setGuests] = useState("2");
    const [occasion, setOccasion] = useState("None");
    // Block for disabling dates earlier than today
    useEffect(() => {
    let today = new Date().toISOString().split('T')[0];
    document.getElementsByName("setDate")[0].setAttribute('min',today);
})
    // Temporary submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
        console.log({date}, {time}, {guests}, {occasion});
    };
    return (
        <>
            <form
                style={{
                    display: "grid",
                    maxWidth: "600px",
                    gap: "20px",
                    margin: "auto",
                    padding: "2rem 2rem",
                    borderRadius: "16pt",
                    backgroundColor: "#EDEFEE"
                }}
                onSubmit={handleSubmit}
                >
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    name="setDate"
                    id="res-date"
                    onChange={e => setDate(e.target.value)}
                />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" onChange={e => setTime(e.target.value)}>
                    {props.times.map((hour) => (
                        <option key={hour}>{hour}</option>
                        ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="2"
                    min="1"
                    max="10"
                    id="guests"
                    onChange={e => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={e => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make your reservation"/>
            </form>
        </>
    );
};

export default BookingForm;