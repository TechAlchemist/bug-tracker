const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const closedBugSchema = new Schema({
    projectID: String,
    openBugID: {
        type: String,
        required: true
   },
    openDescription: {
        type: String,
        required: true
   },
    closeDescription: {
        type: String,
        required: true
}

}, {
    timestamps: true
});

module.exports = mongoose.model('closed-bug', closedBugSchema);