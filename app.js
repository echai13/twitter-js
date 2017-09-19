const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use('/', routes);
app.use(express.static('public'));

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
// nunjucks.configure('views'); // point nunjucks to the proper directory for templates
nunjucks.configure('views', {noCache: true});

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(req.method)
    next();
})

app.listen(3000, function() {//for terminal
  console.log("Listening on port 3000...");
});
