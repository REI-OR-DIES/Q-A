import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Modal from 'react-modal';

const QuestionList = ({ questionList, answerQuestion }) => {

const [isAnsweringQuestion, setIsAnsweringQuestion] = useState(false);
const [answerTitle, setAnswerTitle] = useState(null);
const [answerBody, setAnswerBody] = useState(null);
const [answerUserName, setAnswerUserName] = useState(null);

  const onSubmit = (answer) => {() =>
    answerQuestion(answer);
  }

  return (
    <div className="questionList">
    {
      questionList.slice(0, 5).map(question => {
        return (
          <div key={question._id}>
          <p className="author">{question.questionAuthor}</p>
          <p className="title">{question.questionTitle}</p>
          <p className="createdAt">{question.questionCreatedAt}</p>
          <p className="questionBody">{question.questionBody}</p>
          <p className="numberOfAnswers">
            Answers:
            {question.answers}
          </p>
          <button
            type="submit"
            className="answerQuestion"
            onClick={() => setIsAnsweringQuestion(true)}
          >
            Answer the question
          </button>
          <Modal isOpen={isAnsweringQuestion} onRequestClose={() => setIsAnsweringQuestion(false)}>
          <p className="author">{question.questionAuthor}</p>
          <p className="title">{question.questionTitle}</p>
          <p className="createdAt">{question.questionCreatedAt}</p>
          <p className="questionBody">{question.questionBody}</p>
          <form
              onSubmit={(event) => {
                event.preventDefault();
                onSubmit({ questionAuthor, questionTitle, questionBody })
              }}
            >
              <label>
                  Answer Title:
                  <input
                  type="text" name="questionTitle"
                  onChange={(event) => setAnswerTitle(event.target.value)}
                  />
              </label>
              <label>
                  Answer:
                  <input type="text" name="questionBody"
                  onChange={(event) => setAnswerBody(event.target.value)}
                  />
              </label>
              <label>
                  Nickname:
                  <input
                  type="text"
                  name="username"
                  onChange={(event) => setAnswerUserName(event.target.value)}
                  />
              </label>
              <button onClick={() => onSubmit({ _id, answerTitle, answerBody, answerUserName })}>
                  Answer question
              </button>
            </form>
            <button onClick={() => setIsAnsweringQuestion(false)}>
              Close
            </button>
          </Modal>
        </div>
        )
      })
    }
  </div>
  )

};

QuestionList.propTypes = {
  questionList: PropTypes.arrayOf.isRequired,
};

export default QuestionList;