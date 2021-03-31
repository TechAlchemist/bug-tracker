const OpenBug = require('../models/open-bug');
const Project = require('../models/project');

function index(req, res) {
    OpenBug.find({}, function(error, bugs) {
        res.render('bugs/openBugs', {
            bugs
        });
    });
}

function newBug(req, res) {
    const bug = new OpenBug(req.body);
    try {
        bug.save();
    }
    catch(error) {
        return res.status(400).json(error);
    }
    finally {
        return res.status(200).json({"Message": "Bug created successfully. Hmmm, never thought I'd say that..."});
    }
}

function bugDetails(req, res) {
    OpenBug.findById(req.params.id, function(error, bug) {
        res.render('bugs/show', {
            bug
        });
    });
}

function editBugDetails(req, res) {
    OpenBug.findById(req.params.id, function(error, bug) {
        res.render('bugs/open-bug-edit', {
            bug
        });
    });
}




module.exports = {
    index,
    newBug,
    bugDetails,
    editBugDetails
};