const mongoose = require('mongoose');

 //mongoose schema
 const JoinSchema = new mongoose.Schema({
    name: String,
    age: String,
    qualification: String,
    passoutYr: String,
    Email : String,
    course1 : String,
    course2 : String,
    course3 : String,
    course4 : String,
    course5 : String,
    course6 : String,
    course7 : String,
    course8 : String,
    course9 : String,
    course10 : String,
    course11 : String,
    ReviewerDesc : String,
});

module.exports = mongoose.model('Join',JoinSchema)