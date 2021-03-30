const Project = require('../models/project');

function index(req, res) {
    Project.find({}, function(error, projects) {
        res.render('projects/index', {
            projects
        });
    });
}

function newProject(req, res) {
    const project = new Project(req.body);
    try {
        project.save();
    }
    catch(error) {
        return res.status(400).json(error);
    }
    finally {
        return res.status(200).json({"Message": "New project created, hopefully we can finish this one."});
    }
}

module.exports = {
    index,
    newProject
};