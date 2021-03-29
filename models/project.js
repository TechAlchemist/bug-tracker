const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
   projectName: String,
   totalBugs: Number,
   openBugs: Number,
   closedBugs: Number 
}, {
    timestamps: true
});

module.exports = mongoose.model('project', projectSchema);