const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const openBugSchema = new Schema({
   projectID: String,
   projectName: String,
   description: String

}, {
    timestamps: true
});

module.exports = mongoose.model('open-bug', openBugSchema);