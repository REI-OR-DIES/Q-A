import React from 'react';

const Question = ({ questionList }) => (
  <div className="question">
    <h4>We got some questions:</h4>
    <div>
      <p className="author">{questionList.questionAuthor}</p>
      <p className="title">{questionList.questionTitle}</p>
      <p className="createdAt">{questionList.questionCreatedAt}</p>
      <p className="questionBody">{questionList.questionBody}</p>
    </div>
  </div>
);

export default Question;
