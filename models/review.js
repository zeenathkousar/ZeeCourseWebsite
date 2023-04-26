const mongoose = require('mongoose');


const ReviewSchema = new mongoose.Schema({
    name: String,
    Email : String,
    qualification : String,
});

module.exports = mongoose.model('Review',ReviewSchema)