import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList';
import Modal from 'react-modal';

const App = () => {
  const [questionList, setQuestionList] = useState([]);
  const [isAskingQuestion, setIsAskingQuestion] = useState(false);

  const getQuestionList = () => {
    axios.get('http://localhost:3007/api/questions')
      .then(({ data }) => {
        const questions = [];
        for (let i = 0; i < 25; i++) {
          questions.push(data[i]);
        }
        setQuestionList(questions);
      });
  };
  useEffect(() => {
    getQuestionList();
  }, []);

  const handleSubmit = (newQuestion) => {
    addQuestion(newQuestion)
  };

  const addQuestion = (question) => {
    axios.post('/api/questions', question).then(getQuestionList)
  };



  return (
    <div>
      <h1>Questions and Answers</h1>
      <button
        type="submit"
        className="askQuestion"
        onClick={() => setIsAskingQuestion(true)}
      >
        Ask a question
      </button>
      <Modal isOpen={isAskingQuestion}>
            <h2>Modal is working</h2>
            <p>Modal body will go here!</p>
            <button onClick={() => setIsAskingQuestion(false)}>Close</button>
          </Modal>
      <QuestionList
        questionList={questionList}
      />
       <button
            type="submit"
            className="showMore"
          >
            Show more
          </button>
    </div>
  );
};


export default App;
