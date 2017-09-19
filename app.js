const express = require('express');
const app = express();

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(req.method)
    next();
})

app.listen(3000, function() {//for terminal
  console.log("Listening on port 3000...");
});

app.get("/", function(request, response) {//for webpage
  response.send("Hello World!");
})

