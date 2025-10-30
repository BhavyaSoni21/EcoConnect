// src/firebase/firestoreHelpers.js

import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit 
} from 'firebase/firestore';
import { db } from './config';

// Add a new story
export const addStoryToFirestore = async (storyData) => {
  try {
    const docRef = await addDoc(collection(db, 'stories'), {
      ...storyData,
      createdAt: new Date().toISOString(),
      likes: 0
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get all stories
export const getStoriesFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, 'stories'), orderBy('createdAt', 'desc'))
    );
    const stories = [];
    querySnapshot.forEach((doc) => {
      stories.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, stories };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Register for event
export const registerForEventFirestore = async (userId, eventId) => {
  try {
    await addDoc(collection(db, 'eventRegistrations'), {
      userId,
      eventId,
      registeredAt: new Date().toISOString()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get user's registered events
export const getUserEventsFromFirestore = async (userId) => {
  try {
    const q = query(
      collection(db, 'eventRegistrations'), 
      where('userId', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, events };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Submit volunteer application
export const submitVolunteerApplication = async (applicationData) => {
  try {
    const docRef = await addDoc(collection(db, 'volunteerApplications'), {
      ...applicationData,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Submit contact form
export const submitContactForm = async (contactData) => {
  try {
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      ...contactData,
      submittedAt: new Date().toISOString(),
      status: 'unread'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
