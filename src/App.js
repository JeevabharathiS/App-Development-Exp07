import React, { useState } from 'react';
import './index.css'; // Correct reference to index.css

const App = () => {
    const questions = [
        {
            question: 'Who was the leader of Nazi Germany during World War II?',
            options: ['Adolf Hitler', 'Winston Churchill', 'Franklin D. Roosevelt', 'Joseph Stalin'],
            answer: 'Adolf Hitler',
        },
        {
            question: 'When did World War II start?',
            options: ['1939', '1940', '1941', '1938'],
            answer: '1939',
        },
        {
            question: 'Which country was invaded by Germany to start World War II?',
            options: ['Poland', 'France', 'Russia', 'Belgium'],
            answer: 'Poland',
        },
        {
            question: 'Which battle is considered the turning point in the Pacific during WWII?',
            options: ['Battle of Midway', 'Battle of Stalingrad', 'Battle of El Alamein', 'Battle of Normandy'],
            answer: 'Battle of Midway',
        },
        {
            question: 'What year did the United States enter World War II?',
            options: ['1940', '1941', '1942', '1943'],
            answer: '1941',
        },
        {
            question: 'Which event led to the United States joining World War II?',
            options: ['Attack on Pearl Harbor', 'D-Day', 'The invasion of Italy', 'The fall of Berlin'],
            answer: 'Attack on Pearl Harbor',
        },
        {
            question: 'Which of the following countries was part of the Axis Powers?',
            options: ['Germany', 'France', 'Great Britain', 'United States'],
            answer: 'Germany',
        },
        {
            question: 'Which country was occupied by Japan during World War II?',
            options: ['China', 'Australia', 'India', 'South Korea'],
            answer: 'China',
        },
        {
            question: 'What was the primary objective of the D-Day invasion?',
            options: ['To liberate France', 'To capture Berlin', 'To invade Japan', 'To secure oil fields'],
            answer: 'To liberate France',
        },
        {
            question: 'Which battle marked the final defeat of Germany in Europe?',
            options: ['Battle of the Bulge', 'Battle of Berlin', 'Battle of El Alamein', 'Battle of Stalingrad'],
            answer: 'Battle of Berlin',
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false); // Track quiz completion

    const handleAnswer = (selectedAnswer) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = selectedAnswer;
        setUserAnswers(updatedAnswers);

        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            setScore(score + 1); // Increment score if the answer is correct
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizFinished(true); // Set quiz as finished after the last question
        }
    };

    return (
        <div className="app-container">
            <h1 className="title">World War II Quiz</h1>
            <div className="quiz-container">
                {!quizFinished ? (
                    <>
                        <div className="question">{questions[currentQuestionIndex].question}</div>
                        <ul className="options">
                            {questions[currentQuestionIndex].options.map((option, index) => (
                                <li key={index} onClick={() => handleAnswer(option)}>
                                    <label>({String.fromCharCode(65 + index)}) {option}</label>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => handleAnswer('next')}>Next</button>
                    </>
                ) : (
                    <h2 className="result">Your Score: {score}/{questions.length}</h2>
                )}
            </div>
        </div>
    );
};

export default App;
