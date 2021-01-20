# GAR-FEC-Q-A

-Currently configured to run on Port 3007

To install dependencies
  -npm install

-To start server
  -npm start

-To seed database:
  -npm run seed

-To test:
  -npm run test

## API Methods
-GET /api/questions
  -returns array containing all question objects

-POST /api/questions
  -allows user to add a new question to database
  -returns list of all questions

-PUT /api/questions/:id
  -allows user to answer question
  -finds the appropriate question based on id
  -edits question record to populate the answer object
  -does not override question values

