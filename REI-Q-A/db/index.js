const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/REI', {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => console.log('success connecting to REI mongoose db'))
  .catch(() => console.log('error connecting to REI mongoose db'))

const db = mongoose.connection;

const qaSchema = mongoose.Schema({
  questionAuthor: String,
  questionTitle: String,
  questionCreatedAt: Date,
  questionHelpfulYes: Number,
  questionHelpfulNo: Number,
  questionBody: String,
  answers: Number,
  answer: {
    answerTitle: String,
    answerAuthor: String,
    answerCreatedAt: Date,
    answerBody: String,
    answerHelpfulYes: Number,
    answerHelpfulNo: Number
  },
})
//QUESTION - HOW TO SUPPORT MULTIPLE ANSWERS?


const Qa = mongoose.model('Qa', qaSchema);

module.exports.Qa = Qa;