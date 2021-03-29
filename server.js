const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const openBugRouter = require('./routes/open-bugs');
const closedBugRouter = require('./routes/closed-bugs');
const projectsRouter  = require('./routes/projects');

const app = express();

// require Database

app.set('view engine', 'ejs');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/', indexRouter);
// app.use('/open-bugs', openBugRouter);
// app.use('/closed-bugs', closedBugRouter);
// app.use('/projects', projectsRouter);

app.listen(port, () => {
    console.log(`Server is on and running on port: ${port}.`);
})