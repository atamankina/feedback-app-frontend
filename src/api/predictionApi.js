import { PREDICTION_API_URL } from '../config';

// Create a new prediction
export const createPrediction = async (question) => {
    try {
      const response = await fetch(`${PREDICTION_API_URL}/prediction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:3000', // Optional if needed
        },
        body: JSON.stringify({ question }),
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error during the API request:', error);
    }
  };
  

// Get all predictions from the API
export const getPredictions = async () => {
  const response = await fetch(`${PREDICTION_API_URL}/prediction`);
  
  const result = await response.json();
  
  // Return the array of predictions, including question, predictionId, and prediction
  return result.map(prediction => ({
    question: prediction.question,
    predictionId: prediction.predictionId,
    prediction: prediction.prediction,
  }));
};

// Delete a specific prediction by ID
export const deletePrediction = async (id) => {
  const response = await fetch(`${PREDICTION_API_URL}/prediction/${id}`, {
    method: 'DELETE',
  });
  
  const result = await response.json();
  return result.message;
};
