import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage';
import PredictionsPage from './pages/PredictionsPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <nav className="navbar">
          <Link to="/">Feedback</Link>
          <Link to="/predictions">Predictions</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FeedbackPage />} />
          <Route path="/predictions" element={<PredictionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
