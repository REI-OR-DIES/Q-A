import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ questionList }) => (
  <div className="question">
    <div key={question._id}>
      <p className="author">{question.questionAuthor}</p>
      <p className="title">{question.questionTitle}</p>
      <p className="createdAt">{question.questionCreatedAt}</p>
      <p className="questionBody">{question.questionBody}</p>
      <p className="numberOfAnswers">
        Number of Answers
        {question.answers}
      </p>
      <button
        type="submit"
        className="answerQuestion"
      >
        Answer the question
      </button>
    </div>
  </div>
);

Question.propTypes = {
  questionList: PropTypes.any.isRequired,
};

export default Question;
