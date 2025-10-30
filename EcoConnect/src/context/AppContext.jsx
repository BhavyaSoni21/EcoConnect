import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockEvents } from '../data/eventsData';
import { mockStories } from '../data/storiesData';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState(mockEvents);
  const [stories, setStories] = useState(mockStories);
  const [userActivities, setUserActivities] = useState({
    events: [],
    stories: [],
    stats: { eventsJoined: 0, storiesPosted: 0 }
  });

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('sdg_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    const savedActivities = localStorage.getItem('sdg_activities');
    if (savedActivities) {
      setUserActivities(JSON.parse(savedActivities));
    }
  }, []);

  // Save user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('sdg_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('sdg_user');
    }
  }, [user]);

  // Save activities to localStorage
  useEffect(() => {
    localStorage.setItem('sdg_activities', JSON.stringify(userActivities));
  }, [userActivities]);

  const login = (email, password) => {
    // Mock login - in production, use Firebase Auth
    if (email && password.length >= 6) {
      const newUser = { 
        name: email.split('@')[0], 
        email,
        id: Date.now()
      };
      setUser(newUser);
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = (name, email, password) => {
    // Mock signup - in production, use Firebase Auth
    if (name && email && password.length >= 6) {
      const newUser = { name, email, id: Date.now() };
      setUser(newUser);
      return { success: true };
    }
    return { success: false, error: 'Please fill all fields correctly' };
  };

  const logout = () => {
    setUser(null);
    setUserActivities({
      events: [],
      stories: [],
      stats: { eventsJoined: 0, storiesPosted: 0 }
    });
  };

  const registerForEvent = (eventId) => {
    if (!user) {
      return { success: false, error: 'Please login first' };
    }

    setEvents(events.map(e => 
      e.id === eventId ? { ...e, registered: true } : e
    ));

    setUserActivities(prev => ({
      ...prev,
      events: [...prev.events, eventId],
      stats: { 
        ...prev.stats, 
        eventsJoined: prev.stats.eventsJoined + 1 
      }
    }));

    return { success: true };
  };

  const addStory = (story) => {
    if (!user) {
      return { success: false, error: 'Please login first' };
    }

    const newStory = { 
      ...story, 
      id: Date.now(), 
      author: user.name,
      date: new Date().toISOString().split('T')[0]
    };

    setStories([newStory, ...stories]);
    
    setUserActivities(prev => ({
      ...prev,
      stories: [...prev.stories, newStory.id],
      stats: { 
        ...prev.stats, 
        storiesPosted: prev.stats.storiesPosted + 1 
      }
    }));

    return { success: true };
  };

  const value = {
    user,
    login,
    signup,
    logout,
    events,
    registerForEvent,
    stories,
    addStory,
    userActivities
  };

  return (
    
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
    
  );
};