import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const QuestionList = ({ questionList }) => (
  <div className="questionList">
    {
      questionList.map(question => {
        return (
          <Question questionList={questionList}/>
        )
      })
    }
  </div>
);

QuestionList.propTypes = {
  questionList: PropTypes.arrayOf.isRequired,
};

export default QuestionList;