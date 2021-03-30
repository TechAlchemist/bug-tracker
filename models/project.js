const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
   projectName: String,
   projectShortDescription: String
}, {
    timestamps: true
});

module.exports = mongoose.model('project', projectSchema);