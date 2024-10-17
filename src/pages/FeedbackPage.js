import React, { useState, useEffect } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import { getFeedback } from '../api/feedbackApi';
import '../styles/App.css';

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = async () => {
    const feedbackData = await getFeedback();
    setFeedbacks(feedbackData);
  };

  return (
    <div className='container'>
      <h1>Feedback</h1>
      <FeedbackForm onFeedbackAdded={loadFeedback} />
      <FeedbackList feedbacks={feedbacks} onFeedbackDeleted={loadFeedback} />
    </div>
  );
};

export default FeedbackPage;
