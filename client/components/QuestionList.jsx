/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'; import PropTypes from 'prop-types';
import Modal from 'react-modal';

const QuestionList = ({ questionList, answerQuestion }) => {
  const [isAnsweringQuestion, setIsAnsweringQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answerTitle, setAnswerTitle] = useState(null);
  const [answerBody, setAnswerBody] = useState(null);
  const [answerUserName, setAnswerUserName] = useState(null);

  return (
    <>
      <div className="questionList">
        {
        questionList.slice(0, 5).map(((question) => (

          <div key={question._id}>
            <div>
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
                onClick={() => {
                  setCurrentQuestion(question);
                  setIsAnsweringQuestion(question);
                }}
              >
                Answer the question
              </button>
            </div>
            <div>
              { // eslint-disable-next-line max-len
            }
              <Modal isOpen={isAnsweringQuestion} onRequestClose={() => setIsAnsweringQuestion(false)}>
                <p className="author">{currentQuestion.questionAuthor}</p>
                <p className="title">{currentQuestion.questionTitle}</p>
                <p className="createdAt">{currentQuestion.questionCreatedAt}</p>
                <p className="questionBody">{currentQuestion.questionBody}</p>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>
                    Answer Title:
                    <input
                      type="text"
                      name="questionTitle"
                      onChange={(event) => setAnswerTitle(event.target.value)}
                    />
                  </label>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label>
                    Answer:
                    <input
                      type="text"
                      name="questionBody"
                      onChange={(event) => setAnswerBody(event.target.value)}
                    />
                  </label>
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
                        answerTitle,
                        answerBody,
                        answerUserName,
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
            )
            ))

          </div>
        )
        ))
        }
      </div>
    </>
  );
};

QuestionList.propTypes = {
  questionList: PropTypes.arrayOf.isRequired,
  answerQuestion: PropTypes.bool.isRequired,
};

export default QuestionList;
