// src/pages/DashboardPage.jsx
import React from 'react';
import { Calendar, Heart, TrendingUp, MapPin, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';

const DashboardPage = () => {
  const { user, events, stories, userActivities } = useApp();

  const userEvents = events.filter(e => userActivities.events.includes(e.id));
  const userStories = stories.filter(s => userActivities.stories.includes(s.id));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome back, {user?.name || 'Changemaker'}!
          </h1>
          <p className="text-lg md:text-xl">
            Track your impact and continue making a difference
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Impact</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-green-700">
                {userActivities.stats.eventsJoined}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Events Joined</h3>
            <p className="text-sm text-gray-600">Total events you've registered for</p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-blue-700">
                {userActivities.stats.storiesPosted}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Stories Shared</h3>
            <p className="text-sm text-gray-600">Inspiring stories you've posted</p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-purple-700">
                {userActivities.stats.eventsJoined * 5}h
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Estimated Hours</h3>
            <p className="text-sm text-gray-600">Time contributed to SDG activities</p>
          </div>
        </div>

        {/* My Events */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">My Registered Events</h2>
          {userEvents.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-12 text-center">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600 mb-4">No events registered yet</p>
              <a 
                href="/events"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-block"
              >
                Browse Events
              </a>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {userEvents.map(event => (
                <div key={event.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                      Registered
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* My Stories */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">My Stories</h2>
          {userStories.length === 0 ? (
            <div className="bg-gray-50 rounded-xl p-12 text-center">
              <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600 mb-4">No stories posted yet</p>
              <a 
                href="/stories"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition inline-block"
              >
                Share Your Story
              </a>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {userStories.map(story => (
                <div key={story.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
                  <div className="text-6xl text-center py-8 bg-gradient-to-br from-purple-100 to-pink-100">
                    {story.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{story.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{story.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{story.date}</span>
                      <span className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>{story.likes}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Continue Your Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="/events"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-xl p-6 transition text-center"
            >
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Join More Events</h3>
              <p className="text-sm opacity-90">Find upcoming activities</p>
            </a>
            <a 
              href="/stories"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-xl p-6 transition text-center"
            >
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Share a Story</h3>
              <p className="text-sm opacity-90">Inspire others</p>
            </a>
            <a 
              href="/volunteer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-xl p-6 transition text-center"
            >
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Volunteer</h3>
              <p className="text-sm opacity-90">Expand your impact</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DashboardPage;