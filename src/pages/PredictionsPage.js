import React, { useState, useEffect } from 'react';
import { createPrediction, getPredictions, deletePrediction } from '../api/predictionApi';
import '../styles/App.css';

const PredictionsPage = () => {
  const [question, setQuestion] = useState('');
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    loadPredictions();
  }, []);

  const loadPredictions = async () => {
    const predictionData = await getPredictions();
    setPredictions(predictionData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPrediction(question); 
    setQuestion('');
    loadPredictions();
  };

  const handleDelete = async (id) => {
    await deletePrediction(id);
    loadPredictions();
  };

  return (
    <div className='container'>
      <h1>Prediction Generator</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Ask a Question</h2>
        <textarea
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit Question</button>
      </form>
      <h2>Previous Predictions</h2>
      {predictions.length === 0 ? (
        <p>No predictions available.</p>
      ) : (
        predictions.map((prediction) => (
          <div key={prediction.predictionId} className="feedback-item">
            <h3>Question: {prediction.question}</h3>
            <p>Prediction: {prediction.prediction}</p>
            <button onClick={() => handleDelete(prediction.predictionId)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default PredictionsPage;
