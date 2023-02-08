import React, { useState } from 'react';

export default function AddEvent() {
  const [event, setEvent] = useState({
    eventName: '',
    description: '',
    location: '',
    time: '',
    categories: [],
    workshops: []
  });

  const handleInputChange = (event) => {
    setEvent({ ...event, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={event.eventName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={event.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={event.location}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={event.time}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="categories">Categories:</label>
        <select
          multiple
          id="categories"
          name="categories"
          value={event.categories}
          onChange={handleInputChange}
        >
          {/* Add options for categories */}
        </select>
      </div>
      <div>
        <label htmlFor="workshops">Workshops:</label>
        <select
          multiple
          id="workshops"
          name="workshops"
          value={event.workshops}
          onChange={handleInputChange}
        >
          {/* Add options for workshops */}
        </select>
      </div>
      <button type="submit">Add Event</button>
    </form>
  );
};

