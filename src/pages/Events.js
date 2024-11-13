import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4589/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error("Error fetching events data:", error));
  }, []);

  return (
    <div 
      className="p-4 min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://cdn.pixabay.com/video/2023/09/25/182287-868067162_tiny.jpg')" }}
    >
      {/* Glass blur effect on the header */}
      <h1 className="text-2xl font-bold mb-6 text-white px-4 py-2 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 inline-block">
        Events
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="backdrop-blur-md bg-white/30 border border-white/40 rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src={event.image} 
              alt={`${event.title}`} 
              className="w-full h-40 object-cover rounded-t-lg backdrop-blur-sm bg-white/20"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">{event.title}</h2>
              <p className="text-gray-200">Start Date: {event.startDate}</p>
              <p className="text-gray-200">End Date: {event.endDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
