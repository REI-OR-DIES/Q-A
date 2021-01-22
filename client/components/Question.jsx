import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ questionList }) => (
  <div className="question">
    <h4>We got some questions:</h4>
    <div>
      <p className="author">{questionList.questionAuthor}</p>
      <p className="title">{questionList.questionTitle}</p>
      <p className="createdAt">{questionList.questionCreatedAt}</p>
      <p className="questionBody">{questionList.questionBody}</p>
      <p className="numberOfAnswers">
        Number of Answers
        {questionList.answers}
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



export default Question;
