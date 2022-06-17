// IMPORT MONGOOSE IN ORDER TO CREATE A SCHEMA
const mongoose = require("mongoose");

// Create our learner schema
const learnerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  courses: {
    type: [String],
    required: true,
  },
});

//  Lets FINALLYYYYYYYY!!!!! CREATE OUR MODEL
const Learner = mongoose.model("Learner", learnerSchema);

module.exports = Learner;