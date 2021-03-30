const ClosedBug = require('../models/closed-bug');
const OpenBug = require('../models/open-bug');
const Project = require('../models/project');

function index(req, res) {
    ClosedBug.find({}, function(error, bugs) {
        res.render('bugs/closedBugs', {
            bugs
        });
    });
}

function newCloseBug(req, res) {
    const bug = new ClosedBug(req.body);
    try {
        bug.save();


    }
    catch(error) {
        res.status(400).json(error);
    }
    finally {
        deleteBugAfterClose(bug.openBugID);
        res.status(200).json({"Message": "Closing bug. Or rather, we are squishing the bug eh? "});
    }

}

async function deleteBugAfterClose(id) {
    OpenBug.findByIdAndDelete(id, function(error, response) {
        if (error) {
            return false;
        } else {
            return true;
        }
    });
}

module.exports = {
    index,
    newCloseBug
};