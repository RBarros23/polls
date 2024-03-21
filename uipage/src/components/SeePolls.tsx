import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface PollOption {
  id: string;
  title: string;
  score?: number;
}

interface Poll {
    id: string;
    title: string;
    options: PollOption[];
  }


const SeePolls = () => {
  const [poll, setPoll] = useState<Poll | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/polls/${id}`);
        setPoll(response.data.poll);
      } catch (error) {
        console.error('Error fetching polls:', error);
      }
    };

    fetchPolls();
  }, [id]);

  if(!poll){
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{poll.title}</h1>
      <ul>
        {poll.options.map((option) => (
          <li key={option.id}>
            {option.title} - Votes: {option.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeePolls;
