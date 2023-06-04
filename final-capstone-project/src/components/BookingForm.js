import { React, useState, useEffect } from "react";

const BookingForm = (props) => {
    const [name, setName] = useState("")
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("17");
    const [guests, setGuests] = useState("2");
    const [occasion, setOccasion] = useState("None");
    // Block for disabling dates earlier than today
    let today = new Date().toISOString().split('T')[0]
    useEffect(() => {
    document.getElementsByName("setDate")[0].setAttribute('min',today);
    })
    // Temporary submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitter({
            name: name,
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        });
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
                <label htmlFor="res-name">Your name</label>
                <input
                    type="name"
                    name="setName"
                    id="res-name"
                    onChange={e => setName(e.target.value)}
                    />
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    name="setDate"
                    id="res-date"
                    defaultValue={today}
                    onChange={e => {
                        let newDate = new Date(e.target.value.toString())
                        setDate(newDate)
                        console.log('Date is: ', date)
                        console.log('Value is: ', e.target.value)
                        console.log('Object is: ', new Date(e.target.value.toString()))
                        props.update({
                            type: "updateTimes",
                            date: newDate
                        })
                    }}
                />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" onChange={e => setTime(e.target.value)}>
                    {props.times.map((time) => {
                        return <option key={time}>{time}</option>
                    })}
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