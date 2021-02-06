DROP DATABASE IF EXISTS q_and_a;

CREATE DATABASE q_and_a;

\c q_and_a;

CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  questionAuthor VARCHAR,
  questionTitle VARCHAR,
  questionCreatedAt TIMESTAMP,
  questionBody VARCHAR
);

CREATE TABLE IF NOT EXISTS answers (
  id SERIAL PRIMARY KEY,
  answerAuthor VARCHAR,
  answerTitle VARCHAR,
  answerCreatedAt TIMESTAMP,
  answerBody VARCHAR,
  question_id INTEGER REFERENCES questions(id),
  answerHelpfulYes INTEGER,
  answerHelpfulNo INTEGER
);

-- INSERT INTO questions (questionAuthor, questionTitle, questionBody) VALUES ('author', 'bici', 'this is good'), ('secondTest', 'carro', 'so wonderful');

-- INSERT INTO answers (answerAuthor, answerTitle, answerBody, question_id, answerHelpfulYes, answerHelpfulNo) VALUES ('author', 'bici', 'this is good', 1, 2, 3), ('secondTest', 'carro', 'so wonderful', 1, 5, 9);