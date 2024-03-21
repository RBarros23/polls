import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SeePolls from './components/SeePolls';
import CreatePolls from './components/CreatePolls';
import VoteOnPoll from './components/VoteOnPoll';

// Import other components

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/polls/:id" element={<SeePolls />} />
        <Route path="/polls" element={<CreatePolls />} />
        <Route path="/polls/votes" element={<VoteOnPoll />} />
      </Routes>
    </Router>
  );
};

export default App;
