const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bugSchema = new Schema({
   projectID: String,
   openOrClosed: Boolean,
   openDescription: String,
   closedDescription: String 
}, {
    timestamps: true
});

module.exports = mongoose.model('bug', bugSchema);