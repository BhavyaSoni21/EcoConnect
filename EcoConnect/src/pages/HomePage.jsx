// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { sdgData } from '../data/sdgData';

const HomePage = () => {
  const { events, stories } = useApp();
  const [stats] = useState({
    volunteers: 1247,
    events: events.length,
    stories: stories.length
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Small Actions, Big Impact
          </h1>
          <p className="text-2xl md:text-3xl mb-8">Join the SDG Movement</p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Together, we can achieve the United Nations' 17 Sustainable Development Goals 
            and create a better future for all. Be the change you want to see.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/goals" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition transform hover:scale-105 shadow-lg"
            >
              Explore Goals
            </Link>
            <Link 
              to="/events" 
              className="bg-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition transform hover:scale-105 shadow-lg"
            >
              Join Events
            </Link>
            <Link 
              to="/login" 
              className="bg-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Counter Section */}
      <section className="bg-white py-16 shadow-md">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Growing Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <Users className="w-16 h-16 text-green-600" />
              </div>
              <div className="text-5xl font-bold text-gray-800 mb-2">
                {stats.volunteers.toLocaleString()}+
              </div>
              <div className="text-gray-600 text-lg font-medium">Active Volunteers</div>
              <p className="text-gray-500 text-sm mt-2">Making a difference every day</p>
            </div>
            <div className="p-6 transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <Calendar className="w-16 h-16 text-blue-600" />
              </div>
              <div className="text-5xl font-bold text-gray-800 mb-2">{stats.events}</div>
              <div className="text-gray-600 text-lg font-medium">Upcoming Events</div>
              <p className="text-gray-500 text-sm mt-2">Join us in taking action</p>
            </div>
            <div className="p-6 transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <Heart className="w-16 h-16 text-red-600" />
              </div>
              <div className="text-5xl font-bold text-gray-800 mb-2">{stats.stories}</div>
              <div className="text-gray-600 text-lg font-medium">Community Stories</div>
              <p className="text-gray-500 text-sm mt-2">Inspiring change together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              EcoConnect is a platform dedicated to empowering students, citizens, 
              and volunteers to take action towards achieving the United Nations' Sustainable 
              Development Goals.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We believe that every small action counts, and together, we can create meaningful 
              change in our communities and beyond. Join us in building a sustainable, equitable, 
              and prosperous future for all.
            </p>
          </div>
        </div>
      </section>

      {/* Featured SDGs Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Focus Areas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore the UN's 17 Sustainable Development Goals and discover how you can contribute
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sdgData.slice(0, 8).map(sdg => (
              <Link
                key={sdg.id}
                to="/goals"
                className={`${sdg.color} text-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300`}
              >
                <div className="text-4xl font-bold mb-2">Goal {sdg.id}</div>
                <div className="text-lg font-semibold">{sdg.name}</div>
                <div className="text-sm mt-2 opacity-90">Learn more →</div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/goals" 
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
            >
              <span>View All 17 Goals</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Stories Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Success Stories</h2>
          <Link 
            to="/stories" 
            className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-1"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.slice(0, 3).map(story => (
            <div 
              key={story.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="text-6xl text-center py-8 bg-gradient-to-br from-green-100 to-blue-100">
                {story.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{story.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{story.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>by {story.author}</span>
                  <span className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>{story.likes}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Upcoming Events</h2>
            <Link 
              to="/events" 
              className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.slice(0, 4).map(event => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join thousands of changemakers in your community and start your sustainability journey today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/volunteer" 
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition transform hover:scale-105 shadow-lg"
            >
              Become a Volunteer
            </Link>
            <Link 
              to="/events" 
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-700 transition transform hover:scale-105"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;