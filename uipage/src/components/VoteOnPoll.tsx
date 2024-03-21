import React, { useState } from "react";

interface Vote {
    id: string;
    option: string;   
}




const VoteOnPoll = () => {
    const [newVote, setNewVote] = useState<Vote>({ id: "", option: ""});


    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewVote(prev => ({ ...prev, id: e.target.value }));
    };

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewVote(prev => ({ ...prev, option: e.target.value }));
    };

    const handleButton = async () => {
        console.log(JSON.stringify({ pollOptionId: newVote.option}));
        try{
            const response = await fetch(`http://localhost:3333/polls/${newVote.id}/votes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pollOptionId: newVote.option}),
            });
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
        }catch(error){
            console.log('Error creating the vote:', error);
        }
    }
    
    return (
        <div>
            <h1>Insert the ID of the poll and your vote</h1>
            <div>
                <label htmlFor="pollID">What is the ID of the poll: </label>
                <input
                    id="pollID"
                    type="text"
                    value={newVote.id}
                    onChange={handleIdChange}
                    placeholder="ID"
                />
            </div>
            <div>
                <label htmlFor="pollID">What option are you voting: </label>
                <input
                    id="option"
                    type="text"
                    value={newVote.option}
                    onChange={handleOptionChange}
                    placeholder="Option"
                />
            </div>
                <button onClick={handleButton}>Vote!</button>
        </div>
    )
}




export default VoteOnPoll;
