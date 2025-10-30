// src/pages/StoriesPage.jsx
import React, { useState } from 'react';
import { Heart, User, Calendar, X, Plus, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';

const StoriesPage = () => {
  const { stories, addStory, user } = useApp();
  const [selectedStory, setSelectedStory] = useState(null);
  const [showAddStoryModal, setShowAddStoryModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [likedStories, setLikedStories] = useState([]);
  
  const [newStory, setNewStory] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Environment',
    image: '🌱'
  });

  const categories = ['all', 'Water', 'Education', 'Environment', 'Equality', 'Food', 'Energy', 'Health'];
  const emojis = ['🌊', '📚', '♻️', '👩‍🌾', '🌱', '☀️', '❤️', '🌍', '💡', '🌳', '🏥', '🎓'];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || story.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLike = (storyId) => {
    if (likedStories.includes(storyId)) {
      setLikedStories(likedStories.filter(id => id !== storyId));
    } else {
      setLikedStories([...likedStories, storyId]);
    }
  };

  const handleSubmitStory = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to post a story');
      return;
    }
    if (newStory.title && newStory.excerpt && newStory.content) {
      addStory(newStory);
      setShowAddStoryModal(false);
      setNewStory({
        title: '',
        excerpt: '',
        content: '',
        category: 'Environment',
        image: '🌱'
      });
      alert('Story submitted successfully!');
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Community Success Stories</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Real stories of change from people making a difference in their communities
          </p>
          <button
            onClick={() => setShowAddStoryModal(true)}
            className="bg-white text-purple-700 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Share Your Story</span>
          </button>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition text-sm ${
                    filterCategory === category
                      ? 'bg-purple-600 text-white'
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

      {/* Stories Grid */}
      <section className="container mx-auto px-4 py-12">
        {filteredStories.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-600">No stories found matching your criteria</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map(story => (
              <div 
                key={story.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                {/* Story Image/Emoji */}
                <div className="text-7xl text-center py-10 bg-gradient-to-br from-purple-100 to-pink-100">
                  {story.image}
                </div>

                {/* Story Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-purple-600 transition">
                    {story.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-1">{story.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{story.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <button
                      onClick={() => handleLike(story.id)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition"
                    >
                      <Heart 
                        className={`w-5 h-5 ${likedStories.includes(story.id) ? 'fill-red-500 text-red-500' : ''}`}
                      />
                      <span>{story.likes + (likedStories.includes(story.id) ? 1 : 0)}</span>
                    </button>
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-semibold"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-6xl mb-4">{selectedStory.image}</div>
                  <h2 className="text-3xl font-bold mb-2">{selectedStory.title}</h2>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{selectedStory.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedStory.date}</span>
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedStory(null)} 
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <div className="mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {selectedStory.category}
                </span>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {selectedStory.content}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t flex items-center justify-between">
                <button
                  onClick={() => handleLike(selectedStory.id)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition text-lg"
                >
                  <Heart 
                    className={`w-6 h-6 ${likedStories.includes(selectedStory.id) ? 'fill-red-500 text-red-500' : ''}`}
                  />
                  <span>{selectedStory.likes + (likedStories.includes(selectedStory.id) ? 1 : 0)} likes</span>
                </button>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Story Modal */}
      {showAddStoryModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowAddStoryModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Share Your Story</h2>
                <button 
                  onClick={() => setShowAddStoryModal(false)} 
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmitStory} className="p-6 space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Story Title *</label>
                <input
                  type="text"
                  value={newStory.title}
                  onChange={(e) => setNewStory({...newStory, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Give your story a compelling title"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Short Excerpt *</label>
                <input
                  type="text"
                  value={newStory.excerpt}
                  onChange={(e) => setNewStory({...newStory, excerpt: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="A brief summary (1-2 sentences)"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Story *</label>
                <textarea
                  value={newStory.content}
                  onChange={(e) => setNewStory({...newStory, content: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-40"
                  placeholder="Share your complete story..."
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Category *</label>
                <select
                  value={newStory.category}
                  onChange={(e) => setNewStory({...newStory, category: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                >
                  {categories.slice(1).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Choose an Emoji</label>
                <div className="flex flex-wrap gap-2">
                  {emojis.map(emoji => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setNewStory({...newStory, image: emoji})}
                      className={`text-3xl p-2 rounded-lg transition ${
                        newStory.image === emoji 
                          ? 'bg-purple-100 ring-2 ring-purple-600' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  Submit Story
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddStoryModal(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoriesPage;