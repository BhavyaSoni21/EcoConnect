// src/pages/GoalsPage.jsx
import React, { useState } from 'react';
import { X, Target, TrendingUp, Users } from 'lucide-react';
import { sdgData } from '../data/sdgData';

const GoalsPage = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredGoals = filter === 'all' 
    ? sdgData 
    : sdgData.filter(goal => {
        if (filter === 'social') return goal.id >= 1 && goal.id <= 5;
        if (filter === 'economic') return goal.id >= 8 && goal.id <= 12;
        if (filter === 'environmental') return goal.id === 6 || goal.id === 7 || (goal.id >= 13 && goal.id <= 15);
        if (filter === 'governance') return goal.id >= 16 && goal.id <= 17;
        return true;
      });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            17 Sustainable Development Goals
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The SDGs are a universal call to action to end poverty, protect the planet, 
            and ensure peace and prosperity for all by 2030
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Goals
            </button>
            <button
              onClick={() => setFilter('social')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'social'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Social (1-5)
            </button>
            <button
              onClick={() => setFilter('economic')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'economic'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Economic (8-12)
            </button>
            <button
              onClick={() => setFilter('environmental')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'environmental'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Environmental (13-15)
            </button>
            <button
              onClick={() => setFilter('governance')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'governance'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Governance (16-17)
            </button>
          </div>
        </div>
      </section>

      {/* Goals Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredGoals.map(sdg => (
            <div
              key={sdg.id}
              onClick={() => setSelectedGoal(sdg)}
              className={`${sdg.color} text-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-300`}
            >
              <div className="text-5xl font-bold mb-3">{sdg.id}</div>
              <div className="text-xl font-semibold leading-tight">{sdg.name}</div>
              <div className="mt-3 text-sm opacity-90">Click to learn more →</div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About the SDGs</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The <strong>Sustainable Development Goals (SDGs)</strong>, also known as the Global Goals, 
              were adopted by the United Nations in 2015 as a universal call to action to end poverty, 
              protect the planet, and ensure that by 2030 all people enjoy peace and prosperity.
            </p>
            <p>
              The 17 SDGs are integrated—they recognize that action in one area will affect outcomes in 
              others, and that development must balance social, economic and environmental sustainability.
            </p>
            <p>
              Countries have committed to prioritize progress for those who are furthest behind. The SDGs 
              are designed to end poverty, hunger, AIDS, and discrimination against women and girls.
            </p>
            <p className="font-semibold text-green-700">
              India has made significant progress towards achieving these goals, with initiatives spanning 
              across healthcare, education, sanitation, renewable energy, and more. Every citizen has a 
              role to play in achieving these ambitious targets by 2030.
            </p>
          </div>
        </div>
      </section>

      {/* Goal Detail Modal */}
      {selectedGoal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedGoal(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`${selectedGoal.color} text-white p-8 rounded-t-2xl`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-6xl font-bold mb-2">Goal {selectedGoal.id}</div>
                  <h2 className="text-3xl font-bold">{selectedGoal.name}</h2>
                </div>
                <button 
                  onClick={() => setSelectedGoal(null)} 
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6">
              {/* Description */}
              <div>
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-2xl font-bold text-gray-800">Global Target</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedGoal.description}
                </p>
              </div>

              {/* Key Targets */}
              {selectedGoal.targets && (
                <div>
                  <div className="flex items-center mb-3">
                    <Target className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-2xl font-bold text-gray-800">Key Targets</h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedGoal.targets.map((target, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* India's Progress */}
              <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-6 h-6 text-orange-600 mr-2" />
                  <h3 className="text-2xl font-bold text-gray-800">India's Progress</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {selectedGoal.indiaProgress}
                </p>
              </div>

              {/* How You Can Help */}
              <div>
                <div className="flex items-center mb-3">
                  <Users className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-2xl font-bold text-gray-800">How You Can Help</h3>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    {selectedGoal.activities && selectedGoal.activities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="/events" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  onClick={() => setSelectedGoal(null)}
                >
                  Find Related Events
                </a>
                <a 
                  href="/volunteer" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  onClick={() => setSelectedGoal(null)}
                >
                  Volunteer Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalsPage;