import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList';
import Modal from 'react-modal';


Modal.setAppElement('#app');

const App = () => {
  const [questionList, setQuestionList] = useState([]);
  const [isAskingQuestion, setIsAskingQuestion] = useState(false);
  const [questionAuthor, setQuestionAuthor] = useState('');
  const [questionTitle, setQuestionTitle] = useState('');
  const [questionBody, setQuestionBody] = useState('');
  const [lastQuestion, setLastQuestion] = useState(null)

  const getQuestionList = () => {
    axios.get('http://localhost:3007/api/questions')
      .then(({ data }) => {
        const questions = [];
        for (let i = 0; i < 5; i++) {
          questions.push(data[i]);
          setLastQuestion(i);
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
    axios.post('/api/questions', question)
    .then(getQuestionList)
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
      <Modal isOpen={isAskingQuestion} onRequestClose={() => setIsAskingQuestion(false)}>
            <h2>Ask a Question</h2>
            <form
              handleSubmit={(event) => {
                event.preventDefault();
                handleSubmit({ questionAuthor, questionTitle, questionBody })
              }}
            >
              <label>
                  Question Title:
                  <input
                  type="text" name="questionTitle"
                  onChange={(event) => setQuestionTitle(event.target.value)}
                  />
              </label>
              <label>
                  Question:
                  <input type="text" name="questionBody"
                  onChange={(event) => setQuestionBody(event.target.value)}
                  />
              </label>
              <label>
                  Nickname:
                  <input
                  type="text"
                  name="username"
                  onChange={(event) => setQuestionAuthor(event.target.value)}
                  />
              </label>
              <button onClick={() => onSubmit()}>
                  Post question
              </button>
            </form>
            <button onClick={() => setIsAskingQuestion(false)}>Close</button>
          </Modal>
      <QuestionList
        questionList={questionList}
      />
      <button
        type="submit"
        className="showMore"
        onClick={() => axios.get('http://localhost:3007/api/questions')
        .then(({ data }) => {
          const newQuestions = [];
          for (let i = lastQuestion + 1; i < lastQuestion + 6; i++) {
            newQuestions.push(data[i]);
            setLastQuestion(i);
          }
          setQuestionList(newQuestions)
        })
      }
      >
        Show more
      </button>
    </div>
  );
};


export default App;
