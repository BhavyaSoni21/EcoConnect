// src/pages/EventsPage.jsx
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Filter, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockNews } from '../data/newsData';

const EventsPage = () => {
  const { events, registerForEvent, user } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const categories = ['all', 'Climate', 'Education', 'Equality', 'Hunger', 'Energy', 'Water', 'Health'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRegister = (eventId) => {
    const result = registerForEvent(eventId);
    if (result.success) {
      alert('Successfully registered for the event!');
    } else {
      alert(result.error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join community initiatives and make a tangible impact on sustainable development
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-8 shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition text-sm ${
                    filterCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredEvents.map(event => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold flex-1">{event.title}</h3>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </span>
                </div>
                <p className="text-sm opacity-90">{event.description}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p className="text-sm">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-gray-700">
                  <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Slots Available</p>
                    <p className="text-sm">{event.slots - event.registered} / {event.slots}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Organizer</p>
                    <p className="text-sm">{event.organizer}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRegister(event.id)}
                  disabled={event.registered}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    event.registered
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {event.registered ? '✓ Registered' : 'Register Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* News Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Latest Sustainability News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews.map(news => (
              <div key={news.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{news.title}</h3>
                <p className="text-gray-600 mb-3">{news.summary}</p>
                <p className="text-sm text-gray-500">Source: {news.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default EventsPage;