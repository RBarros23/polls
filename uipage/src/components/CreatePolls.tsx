import React, { useState } from "react";

interface Poll {
    title: string;
    options: string[];
}

const CreatePolls = () => {
    const [newPoll, setNewPoll] = useState<Poll>({ title: "", options: ["", "", "", ""] });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPoll(prev => ({ ...prev, title: e.target.value }));
        console.log("Chage title!");
        console.log(`${e.target.value}`);
    };

    const handleOptionChange = (index: number, value: string) => {
        setNewPoll(prev => ({
            ...prev,
            options: prev.options.map((option, idx) => idx === index ? value : option)
        }));
    };

    const handleButton = async () => {
        try {
            const response = await fetch('http://localhost:3333/polls', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPoll),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Poll created:', data);
        } catch (error) {
            console.error('Error creating the poll:', error);
        }
    };

    return (
        <div>
            <h1>Insert the data for the poll</h1>
            <div>
                <label htmlFor="pollTitle">What is the title of the poll: </label>
                <input
                    id="pollTitle"
                    type="text"
                    value={newPoll.title}
                    onChange={handleTitleChange}
                    placeholder="Enter title of the poll"
                />
            </div>
            {newPoll.options.map((option, index) => (
                <div key={index} style={{ textIndent: '40px' }}>
                    <label htmlFor={`option${index}`}>Option {index + 1}: </label>
                    <input
                        id={`option${index}`}
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        placeholder={`Enter option ${index + 1}`}
                    />
                </div>
            ))}
            <button onClick={handleButton}>Create poll!</button>
        </div>
    );
};

export default CreatePolls;
