import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guest, setGuest] = useState("");
  const [occation, setOccation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(e);
  };
  const handleChange = (e) => {
    setDate(e.target.value);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                type="date"
                id="book-date"
                value={date}
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => {
                  setTimes(e.target.value);
                }}
              >
                <option value="">Select Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return (
                    <option key={availableTimes}>{availableTimes.time}</option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guest">Number Of Guest</label>
              <input
                id="book-guest"
                min={1}
                value={guest}
                onChange={(e) => {
                  setGuest(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="book-occation">Occation</label>
              <select
                id="book-occation"
                value={occation}
                onChange={(e) => {
                  setOccation(e.target.value);
                }}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input
                area-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
