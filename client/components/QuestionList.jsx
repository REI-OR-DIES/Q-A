/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'; import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Moment from 'react-moment';

const QuestionList = ({ questionList, answerQuestion }) => {
  const [isAnsweringQuestion, setIsAnsweringQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answertitle, setAnswerTitle] = useState(null);
  const [answerbody, setAnswerBody] = useState(null);
  const [answeruserName, setAnswerUserName] = useState(null);
  return (
    <div className="questionList">
      <div>
        {
        questionList.slice(0, 5).map((question) => (
          <div
            className="question"
            key={question.id}
          >
            <p className="numberOfAnswers">
              {question.answers}
              {' '}
              <div answersNumberText>
                answers
              </div>

            </p>
            <div
              className="headUnit"
            >
              <div className="grid-container">
                <p className="author">{question.questionauthor}</p>
                <p className="createdAt"><Moment fromNow>{question.questioncreatedat}</Moment></p>
              </div>
            </div>
            <p className="title">{question.questiontitle}</p>
            <p className="questionBody">{question.questionbody}</p>
            <div>
              <button
                type="submit"
                className="answerQuestion"
                onClick={() => {
                  setCurrentQuestion(question);
                  setIsAnsweringQuestion(question);
                }}
              >
                Answer the question
              </button>
              {
                    question.answer[0][0] !== undefined ? (
                      <div className="answer">
                        <span>
                          <div className="answerAuthor">
                            {question.answer[0][0].answerauthor}
                          </div>
                          <div className="answerTitle">
                            {question.answer[0][0].answertitle}
                          </div>
                        </span>
                        <div className="answerBody">
                          {question.answer[0][0].answerbody}
                        </div>
                        <p>
                          Helpful?
                          <button
                            type="submit"
                            className="answerHelpfulYes"
                          >
                            Yes
                            {' '}
                            {question.answer[0][0].answerhelpfulyes}
                          </button>
                          <button
                            type="submit"
                            className="answerHelpfulNo"
                          >
                            No
                            {' '}
                            {question.answer[0][0].answerhelpfulno}
                          </button>
                          <button
                            className="reportAsInappropriate"
                            type="submit"
                          >
                            Report as inappropriate
                          </button>
                        </p>

                      </div>
                    )
                      : <div />
                  }
            </div>
            <div>
              <Modal isOpen={isAnsweringQuestion} onRequestClose={() => setIsAnsweringQuestion(false)}>
                <p className="author">{currentQuestion.questionauthor}</p>
                <p className="title">{currentQuestion.questiontitle}</p>
                <p className="createdAt"><Moment fromNow>{question.questioncreatedat}</Moment></p>
                <p className="questionBody">{currentQuestion.questionbody}</p>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >

                  <label>
                    Answer Title:
                    <input
                      type="text"
                      name="questionTitle"
                      onChange={(event) => setAnswerTitle(event.target.value)}
                    />
                  </label>

                  <label>
                    Answer:
                    <input
                      type="text"
                      name="questionBody"
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
                  <button
                    type="submit"
                    onClick={() => {
                      answerQuestion(currentQuestion._id, {
                        answertitle,
                        answerbody,
                        answeruserName,
                      });
                    }}
                  >
                    Answer question
                  </button>
                </form>
                <button
                  type="submit"
                  onClick={() => setIsAnsweringQuestion(false)}
                >
                  Close
                </button>
              </Modal>

            </div>

          </div>
        ))
        }
      </div>
    </div>
  );
};

QuestionList.propTypes = {
  questionList: PropTypes.arrayOf.isRequired,
  answerQuestion: PropTypes.bool.isRequired,
};

export default QuestionList;
