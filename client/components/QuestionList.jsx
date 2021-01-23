import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Modal from 'react-modal';

const QuestionList = ({ questionList }) => {

const [isAnsweringQuestion, setIsAnsweringQuestion] = useState(false);
const [answerTitle, setAnswerTitle] = useState(null);
const [answerBody, setAnswerBody] = useState(null);
const [answerUserName, setAnswerUserName] = useState(null);

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