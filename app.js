const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
   console.log(output);
});
app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(req.method)
    next();
})

app.get("/", function(request, response) {//for webpage
  //response.send("Hello World!");
  response.render('index.html')
})

app.listen(3000, function() {//for terminal
  console.log("Listening on port 3000...");
});
