import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import Modal from 'react-modal';

const QuestionList = ({ questionList }) => (
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
          >
            Answer the question
          </button>
        </div>
        )
      })

    }
  </div>
);

QuestionList.propTypes = {
  questionList: PropTypes.arrayOf.isRequired,
};

export default QuestionList;