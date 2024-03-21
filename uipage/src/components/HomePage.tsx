import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [pollId, setPollId] = useState('');
    const navigateSeePollClick = useNavigate();
    const navigateCreatePollClick = useNavigate();

    const handleSeePollClick = () => {
        navigateSeePollClick(`/polls/${pollId}`);
    }

    const handleCreatePollClick = () => {
        console.log("Button pressed!");
        navigateCreatePollClick('/polls');
    }

  return (
    <div>
      <h1>Welcome to the Poll App</h1>
      <nav>
        <ul>
          {/* <button onClick={handleCreatePollClick}>CreatePoll </button> */}
          <li><Link to="/polls">Create a new poll</Link></li>
          <li>
          <label htmlFor="pollId">To see poll inser ID:</label>
          <input
                type="text" 
                value={pollId}
                onChange={(e) => setPollId(e.target.value)}
                placeholder='Enter Poll ID'
          />
          <button onClick={handleSeePollClick}>See Poll </button>
          </li>
          
          <li><Link to="/polls/votes">Vote on a Poll</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
