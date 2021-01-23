import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Modal from 'react-modal';

const QuestionList = ({ questionList }) => {

const [isAnsweringQuestion, setIsAnsweringQuestion] = useState(false);
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
          <Modal isOpen={isAnsweringQuestion}>
            <h3>Answering the question</h3>
            <p>What is your answer?</p>
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