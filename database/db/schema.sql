DROP DATABASE IF EXISTS q_and_a;

CREATE DATABASE q_and_a;

\c q_and_a;

CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  questionAuthor TEXT,
  questionTitle TEXT,
  questionCreatedAt TEXT,
  questionBody TEXT
);

CREATE TABLE IF NOT EXISTS answers (
  id SERIAL PRIMARY KEY,
  answerAuthor TEXT,
  answerTitle TEXT,
  answerCreatedAt TEXT,
  answerBody TEXT,
  question_id INTEGER REFERENCES questions(id),
  answerHelpfulYes INTEGER,
  answerHelpfulNo INTEGER
);

-- pg_ctl -D /usr/local/var/psql -l logfile start
-- pg_ctl -D /usr/local/var/psql -l logfile stop
-- psql -f schema.sql